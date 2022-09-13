const q=require("../dbConnection/dbConnection")

const router=require('express').Router()

router.get('/allProducts',(req,res)=>{
    q.execute('Select * from products',(err,result)=>{
        res.json({products:result})
    })
    })
    
    module.exports=router