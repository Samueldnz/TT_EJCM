import z from "zod";

const conditionEnum = z.enum(["NEW", "USED", "REFURBISHED"]);

const product = z.object({
  title: z
    .string("Título deve ser uma string")
    .trim()
    .min(3, "Título deve ter no mínimo 3 caracteres")
    .max(100, "Título deve ter no máximo 100 caracteres"),
    
  description: z
    .string()
    .trim()
    .min(10, "Descrição deve ter no mínimo 10 caracteres")
    .max(1000, "Descrição deve ter no máximo 1000 caracteres"),

  price: z
    .number()
    .positive("Preço deve ser um número positivo"),

  condition: conditionEnum,

  amountInStock: z
    .number()
    .int("Estoque deve ser um número inteiro")
    .min(0, "Estoque não pode ser negativo"),

  imageUrl: z
    .url("URL da imagem inválida")
    .optional()
});

const createProduct = product;

const updateProduct = product.partial();

const productParam = z.object({
    productId: z.uuid()
});

export default{
    createProduct,
    updateProduct,
    productParam
};
