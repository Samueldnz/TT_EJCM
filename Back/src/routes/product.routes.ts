import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import { validateBody, validateParams } from '../middlewares/ValidateMiddleware';
import ProductValidator from '../config/ProductValidator';

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

export default router;
