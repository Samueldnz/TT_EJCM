import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { validateBody, validateParams } from '../middlewares/ValidateMiddleware';
import userValidator from '../config/UserValidator';
import { photoUpload } from '../config/uploader';
import passport from 'passport';

const router = Router();

router.post("/login", UserController.login);
router.get("/acesso", passport.authenticate("jwt", { session: false }), UserController.testeAutenticacao);

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

router.post("/upload-avatar/:id", photoUpload.single("avatar"), UserController.uploadAvatar);

export default router;
