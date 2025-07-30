import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import { validateBody, validateParams } from '../middlewares/ValidateMiddleware';
import ProductValidator from '../config/ProductValidator';
import { photoUpload } from '../config/uploader';

const router = Router();

router.post(
    '/',
    validateBody(ProductValidator.createProduct), 
    ProductController.createProduct);

router.get(
    '/:productId',
    validateParams(ProductValidator.productParam), 
    ProductController.readProduct);

router.get(
    '/', 
    ProductController.readAllProducts);

router.put(
    '/:productId', 
    validateBody(ProductValidator.updateProduct),
    validateParams(ProductValidator.productParam),
    ProductController.updateProduct);

router.delete(
    '/:productId', 
    validateParams(ProductValidator.productParam),
    ProductController.deleteProduct);

router.post("/upload-image/:id", photoUpload.single("productImage"), ProductController.uploadImage);

export default router;
