import { PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class FavoriteController {
  
  static async createFavorite(req: Request, res: Response) {
    try {
      const { userId, productId } = req.body;

      const newFavorite = await prisma.favorite.create({
        data: {
          user: { connect: { id: userId } },
          product: { connect: { id: productId } }
        }
      });

      res.status(201).json(newFavorite);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async readFavorite(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const favorite = await prisma.favorite.findUnique({
        where: { id },
        include: {
          user: true,
          product: true
        }
      });

      if (!favorite) {
        return res.status(404).json({ message: "Favorite not found" });
      }

      res.status(200).json(favorite);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async readAllFavorites(req: Request, res: Response) {
    try {
      const favorites = await prisma.favorite.findMany({
        include: {
          user: true,
          product: true
        }
      });

      res.status(200).json(favorites);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateFavorite(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { userId, productId } = req.body;

      const updatedFavorite = await prisma.favorite.update({
        where: { id },
        data: {
          user: { connect: { id: userId } },
          product: { connect: { id: productId } }
        }
      });

      res.status(200).json(updatedFavorite);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteFavorite(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deleted = await prisma.favorite.delete({
        where: { id }
      });

      res.status(200).json(deleted);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
