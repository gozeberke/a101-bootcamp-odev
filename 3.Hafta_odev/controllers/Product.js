const productService=require('../services/product') 

exports.addProduct= async(req,res)=>{
    const response =await productService.addProduct(req.body)
    res.send(response)
 }
 exports.getAllProduct= async(req,res)=>{
    const response =await productService.getAllProduct()
    res.send(response)
    
 }
 exports.getSingleProduct= async(req,res)=>{
   const response =await productService.getSingleProduct(req.params)
   res.send(response)
   
}
exports.updateProductStock= async(req,res)=>{
   const response =await productService.updateProductStock(req.body)
   res.send(response)
   }

exports.deleteProduct= async(req,res)=>{
   const response =await productService.deleteProduct(req.params)
   res.send(response)
}
exports.isDiscountGet=async(req,res)=>{
   const response =await productService.isDiscountGet()
   res.send(response)
}
