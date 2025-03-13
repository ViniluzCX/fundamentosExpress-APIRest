import express, { Request, Response, NextFunction} from "express" //importando o express
import { ZodError } from "zod"

import { routes } from "./routes" //importando as rotas
import { AppError } from "./utils/App_Error" //importando o AppError



const PORT = 3333
const app = express()

app.use(express.json())
app.use(routes)

// @ts-ignore
app.use ((error: any, req: Request, res: Response, next: NextFunction) =>{
    if(error instanceof AppError){  
        return res.status(error.statusCode).json({message: error.message})
    }

  if(error instanceof ZodError){
    return res
    .status(400)
    .json({message: "Validation error", issues: error.format()})
    }
})



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))