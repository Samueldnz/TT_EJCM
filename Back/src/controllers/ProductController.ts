import { Prisma, PrismaClient } from "../generated/prisma";
import {Request, Response } from "express";
const prisma = new PrismaClient()

export class ProductController {
  public static async createProduct(req: Request, res: Response) {
    try {
      const {
        title,
        description,
        price,
        condition,
        amountInStock,
        imageUrl,
        isAvailable
      } = req.body;

      const data: Prisma.ProductCreateInput = {
        title,
        description,
        price,
        condition,
        amountInStock,
        imageUrl,
        isAvailable
      };

      const createdProduct = await prisma.product.create({ data });

      res.status(201).json(createdProduct);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public static async readProduct(req: Request, res: Response) {
    try {
      const { productId } = req.params;

      const foundProduct = await prisma.product.findUnique({
        where: { id: productId }
      });

      if (!foundProduct) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      res.status(200).json(foundProduct);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public static async readAllProducts(_req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public static async updateProduct(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      const {
        title,
        description,
        price,
        condition,
        amountInStock,
        imageUrl,
        isAvailable
      } = req.body;

      const data: Prisma.ProductUpdateInput = {
        title,
        description,
        price,
        condition,
        amountInStock,
        imageUrl,
        isAvailable
      };

      const updatedProduct = await prisma.product.update({
        where: { id: productId },
        data
      });

      res.status(200).json(updatedProduct);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public static async deleteProduct(req: Request, res: Response) {
    try {
      const { productId } = req.params;

      const deletedProduct = await prisma.product.delete({
        where: { id: productId }
      });

      res.status(200).json(deletedProduct);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

}
