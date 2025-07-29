import { Prisma, PrismaClient } from "../generated/prisma";
import {Request, Response } from "express";
const prisma = new PrismaClient()

class UserController{

    public static async createUser(request:Request, response:Response){
        
        try{
            const {cpf, telefone, name, email, password, avatarUrl} = request.body;

            const createInput: Prisma.UserCreateInput = {
                cpf: cpf,
                telefone: telefone,
                name: name,
                email: email,
                password: password,
                avatarUrl: avatarUrl,
            };

            const createdUser = await prisma.user.create({
                data:createInput
            });

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
            });

            response.status(200).json({foundUser});
        }catch (error:any){
            response.status(500).json({message:error.message});
        }
    }    


    public static async readAllUser(request:Request, response:Response){
        
        try{
            
            const {userId} = request.params; 

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


    public static async upserUser(request:Request, response:Response){
        
        try{

            const {userId} = request.params; 
            const {cpf, telefone, name, email, password, avatarUrl} = request.body;

            const createInput: Prisma.UserCreateInput = {
                cpf: cpf,
                telefone: telefone,
                name: name,
                email: email,
                password: password,
                avatarUrl: avatarUrl,
            };

            const updateInput: Prisma.UserUpdateInput = {
                cpf: cpf,
                telefone: telefone,
                name: name,
                email: email,
                password: password,
                avatarUrl: avatarUrl,
            };

            const upsertedUser = await prisma.user.upsert({
                create: createInput,
                update: updateInput,
                where: {
                    id: userId,
                },
            });

            response.status(200).json({upsertedUser});
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

    public static async deleteAllUser(request:Request, response:Response){
        
        try{
            
            const deletedUser = await prisma.user.deleteMany();

            response.status(200).json({deletedUser});
        }catch (error:any){
            response.status(500).json({message:error.message});
        }
    }
}