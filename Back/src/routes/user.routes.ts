import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { validateBody, validateParams } from '../middlewares/ValidateMiddleware';
import userValidator from '../config/UserValidator';

const router = Router();

router.post(
    '/', 
    validateBody(userValidator.createUser),
    UserController.createUser);

router.put(
    '/:userId', 
    validateBody(userValidator.updateUser), 
    validateParams(userValidator.userParam), 
    UserController.updateUser);

router.get(
    '/:userId', 
    validateParams(userValidator.userParam), 
    UserController.readUser);

router.get(
    '/', 
    UserController.readAllUser);

router.delete(
    '/:userId', 
    validateParams(userValidator.userParam),
    UserController.deleteUser);

export default router;
