import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();

router.post('/', ProductController.createProduct);
router.get('/:productId', ProductController.readProduct);
router.get('/', ProductController.readAllProducts);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);

export default router;
