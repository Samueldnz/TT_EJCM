import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { validateBody } from '../middlewares/validateBody';
import { userSchema } from '../schemas/user.schema';

const router = Router();

router.post('/', validateBody(userSchema), UserController.createUser);
router.put('/:userId', validateBody(userSchema), UserController.updateUser);

router.get('/:userId', UserController.readUser);
router.get('/', UserController.readAllUser);
router.delete('/:userId', UserController.deleteUser);

export default router;
