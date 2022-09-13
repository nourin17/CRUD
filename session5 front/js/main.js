let productName=document.getElementById('productName')
let productPrice=document.getElementById('productPrice')
let productDescription=document.getElementById('productDescription')

let products=[];

function getFromApi(){
    fetch('http://localhost:3000/allProducts')
    .then(response=>response.json())
    .then(obj=>{
        products=obj.products
        console.log(products)
        display()
    })
}
getFromApi()


function display(){
    let temp=''
    for(let i=0;i<products.length;i++){
        temp+=`
        <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].description} </td>
        <td><button onclick='deleteProduct(${products[i].id})' class='btn btn-outline-danger'>Delete</button></td>
        <td><button onclick='update(${i},${products[i].id})' class='btn btn-outline-warning'>Update</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML=temp
}


function crud(endPoint,method,data){
    fetch(`http://localhost:3000/${endPoint}`,{
        method:method,
        body:JSON.stringify(data),
        headers:{'Content-Type': 'application/json;charset=UTF-8'}
    })
    .then(response=>response.json())
    .then(obj=>{
        if(obj.message=="success"){
            getFromApi()
        }
    })
}


function inputData(){
    let data={
        name:productName.value,
        price:productPrice.value,
        description:productDescription.value
    }
    crud("addProduct","POST",data)
    productName.value=""
    productPrice.value=""
    productDescription.value=""
}


function deleteProduct(id){
let data={
    id:id
}
crud("delete","DELETE",data)
}


let productId
function update(i,id){
productId=id
productName.value=products[i].name;
productPrice.value=products[i].price;
productDescription.value=products[i].description;
document.getElementById('update').style.display="block"
document.getElementById('add').style.display="none"
}


function sendUpdates(){
    let data={
        id:productId,
        name:productName.value,
        price:productPrice.value,
        description:productDescription.value
    }
    crud("update","PUT",data)
    productName.value=""
    productPrice.value=""
    productDescription.value=""

    document.getElementById('add').style.display="block"
    document.getElementById('update').style.display="none"
 
}