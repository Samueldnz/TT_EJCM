import { Prisma, PrismaClient } from "../generated/prisma";
import {Request, Response } from "express";
import { Mailer } from "../config/mailer";
const prisma = new PrismaClient()

export class UserController{

    public static async createUser(request:Request, response:Response){
        
        try{
            const {cpf, telefone, name, email, password} = request.body;

            const createInput: Prisma.UserCreateInput = {
                cpf: cpf,
                telefone: telefone,
                name: name,
                email: email,
                password: password
            };

            const createdUser = await prisma.user.create({
                data:createInput
            });

            await Mailer.sendEmail(
                email,
                "Cadastro realizado com sucesso",
                `Olá ${name},\n\nSeu cadastro foi efetuado com sucesso na nossa plataforma!\n\nAtenciosamente,\nEquipe Samuel Sampaio do TT - EJCM 2025`
            );

            response.status(201).json({createdUser});
        }catch (error:any){
            response.status(500).json({message:error.message});
        }
    }

    public static async readUser(request:Request, response:Response){
        
        try{
            
            const {userId} = request.params; 

            const foundUser = await prisma.user.findUnique({
                where: {
                    id: userId
                },
                select: {
                    id: true,
                    cpf: true,
                    telefone: true,
                    name: true,
                    email: true,
                    avatarUrl: true,
                }
            });

            response.status(200).json({foundUser});
        }catch (error:any){
            response.status(500).json({message:error.message});
        }
    }    


    public static async readAllUser(request:Request, response:Response){
        
        try{
            const users = await prisma.user.findMany();

            response.status(200).json({users});
        }catch (error:any){
            response.status(500).json({message:error.message});
        }
    }

    public static async updateUser(request:Request, response:Response){
        
        try{

            const {userId} = request.params; 
            const {cpf, telefone, name, email, password, avatarUrl} = request.body;

            const createInput: Prisma.UserUpdateInput = {
                cpf: cpf,
                telefone: telefone,
                name: name,
                email: email,
                password: password,
                avatarUrl: avatarUrl,
            };

            const updatedUser = await prisma.user.update({
                data:createInput,
                where: {
                    id: userId,
                },
            });

            response.status(200).json({updatedUser});
        }catch (error:any){
            response.status(500).json({message:error.message});
        }
    }

    public static async deleteUser(request:Request, response:Response){
        
        try{
            
            const {userId} = request.params;

            const deletedUser = await prisma.user.delete({
                where: {
                    id: userId
                }
            })

            response.status(200).json({deletedUser});
        }catch (error:any){
            response.status(500).json({message:error.message});
        }
    }

    public static async uploadAvatar(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!req.file) {
                return res.status(400).json({ message: "Nenhum arquivo enviado." });
            }

            const avatarPath = `/uploads/photos/${req.file.filename}`;

            const user = await prisma.user.update({
                where: { id },
                data: { avatarUrl: avatarPath }
            });

            res.status(200).json({ message: "Avatar atualizado com sucesso!", user });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

}