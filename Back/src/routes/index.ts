import { Router } from "express";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import favoriteRoutes from "./favorite.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/favorite", favoriteRoutes);

export default router;
