const express=require('express')
const router=express.Router()
const productEndpoit=require('./product/product')


router.use('/product',productEndpoit)


module.exports=router