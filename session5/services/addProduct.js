const router=require('express').Router()

const q=require("../dbConnection/dbConnection")

router.post('/addProduct',(req,res)=>{
    const{name,price,description}=req.body
q.execute(`Insert into products (name,price,description) values ('${name}','${price}','${description}')`)
res.json({message:'success'})
})

module.exports=router