import { Request, Response } from "express";
import { AppError } from "../utils/App_Error";
import { z } from "zod"


class ProductsController{

    index(req: Request, res: Response){
    const {page, limit} = req.query
         
       
     res.send(`page: ${page} limit: ${limit}`)
    }

    create(req: Request, res: Response){
    const bodySchema = z.object({

    name: z
    .string({required_error: "Nome do produto é obrigatório"})
    .trim()
    .min(6,{message: "Nome do produto precisa ter pelo menos 6 caracteres"}),
     price: z
     .number({required_error: "Preço do produto é obrigatório"})
     .min(0,{message: "Preço do produto não pode ser negativo"})
     
    })  
    
    const {name, price } = bodySchema.parse(req.body)
    
    /*
    if(!name ){
        throw new AppError("Nome do produto é obrigatório")
    }

    if(name.trim().length < 6){
        throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres")
    }

    if(!price){
        throw new AppError("Preço do produto é obrigatório")
    }

    if (price < 0){
        throw new AppError("Preço do produto não pode ser negativo")
    }
        
    throw new Error("Erro ao criar produto...")
      throw new AppError("Erro ao criar produto...",)*/
    
    res.status(201).json({name, price , user_id: req.user_id})
    }


}

export { ProductsController }