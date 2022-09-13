const router=require("express").Router()

const q=require("../dbConnection/dbConnection")

router.put('/update',(req,res)=>{
    const{id,name,price,description}=req.body
    q.execute(`Update products Set name='${name}',price=${price},description='${description}' where id=${id} `)
    res.json({message:'success'})
    })
    
    module.exports=router