const express=require('express')
let router =express.Router()

const productController=require('../../controllers/Product')

router.get('/isDiscount',productController.isDiscountGet)
router.post('/',productController.addProduct)
router.get('/',productController.getAllProduct)
router.get('/:productId',productController.getSingleProduct)
router.delete('/:productId',productController.deleteProduct)

router.put('/',productController.updateProductStock)
module.exports=router