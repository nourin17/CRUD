const express=require('express')
const app=express()

const q=require("./dbConnection/dbConnection")

const cors=require('cors')
app.use(cors())

app.use(express.json())

app.use(require('./services/addProduct'))
app.use(require('./services/getProducts'))
app.use(require('./services/updateProduct'))
app.use(require('./services/deleteProduct'))

app.listen(3000,()=>{
    console.log('server is running....');
})
