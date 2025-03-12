import { Request, Response } from "express";
import { AppError } from "../utils/App_Error";

class ProductsController{

    index(req: Request, res: Response){
    const {page, limit} = req.query
         
       
     res.send(`page: ${page} limit: ${limit}`)
    }

    create(req: Request, res: Response){
    const {name, price} = req.body

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
        
    //throw new Error("Erro ao criar produto...")
      //throw new AppError("Erro ao criar produto...",)
    
    res.status(201).json({name, price , user_id: req.user_id})
    }


}

export { ProductsController }