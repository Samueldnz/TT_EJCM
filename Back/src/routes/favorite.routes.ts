import { Router } from "express";
import { FavoriteController } from "../controllers/FavoriteController";
import { validateBody } from "../middlewares/ValidateMiddleware";
import FavoriteValidator from "../config/FavoriteValidator";

const router = Router();

router.post(
    "/",
    validateBody(FavoriteValidator.createFavorite), 
    FavoriteController.createFavorite);

router.get(
    "/:id",
    validateBody(FavoriteValidator.readFavorite), 
    FavoriteController.readFavorite);

router.get(
    "/", 
    FavoriteController.readAllFavorites);

router.put(
    "/:id",
    validateBody(FavoriteValidator.createFavorite), 
    FavoriteController.updateFavorite);

router.delete(
    ":id", 
    validateBody(FavoriteValidator.readFavorite),
    FavoriteController.deleteFavorite);

export default router;
