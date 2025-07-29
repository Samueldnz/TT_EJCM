import { Router } from "express";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import favoriteRoutes from "./favorite.routes";

const router = Router();

// Agrupamento das rotas com prefixo opcional (ex: /api)
router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/favorite", favoriteRoutes);

export default router;
