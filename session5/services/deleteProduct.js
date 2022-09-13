const router=require('express').Router()

const q=require("../dbConnection/dbConnection")

router.delete('/delete',(req,res)=>{
    const{id}=req.body
    q.execute(`Delete from products where id=${id}`)
    res.json({message:'success'})
})

module.exports=router