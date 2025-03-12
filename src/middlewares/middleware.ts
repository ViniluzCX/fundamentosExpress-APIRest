import { Request, Response, NextFunction } from 'express';

export function myMiddleware(req: Request, res:Response, next:NextFunction){
    
    
    
    req.user_id='123'


    console.log('passou pelo middleware!')

   

    return next()

}


