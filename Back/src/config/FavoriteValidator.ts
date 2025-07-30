import z from "zod";

const favoriteSchema = z.object({
  userId: z.uuid(),
  productId: z.uuid(),
});

const createFavorite = favoriteSchema;

const readFavorite = favoriteSchema;

export default {
    createFavorite,
    readFavorite
}
