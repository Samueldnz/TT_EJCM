import { Router } from "express";
import { FavoriteController } from "../controllers/FavoriteController";

const router = Router();

router.post("/favorite", FavoriteController.createFavorite);
router.get("/favorite/:id", FavoriteController.readFavorite);
router.get("/favorite", FavoriteController.readAllFavorites);
router.put("/favorite/:id", FavoriteController.updateFavorite);
router.delete("/favorite/:id", FavoriteController.deleteFavorite);

export default router;
