import { Router } from "express";
import { FavoriteController } from "../controllers/FavoriteController";

const router = Router();

router.post("/", FavoriteController.createFavorite);
router.get("/:id", FavoriteController.readFavorite);
router.get("/", FavoriteController.readAllFavorites);
router.put("/:id", FavoriteController.updateFavorite);
router.delete(":id", FavoriteController.deleteFavorite);

export default router;
