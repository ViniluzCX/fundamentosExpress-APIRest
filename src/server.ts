import express, { Request, Response, NextFunction} from "express" //importando o express

import { routes } from "./routes" //importando as rotas


import { AppError } from "./utils/App_Error" //importando o AppError



const PORT = 3333
const app = express()

app.use(express.json())
app.use(routes)

app.use((error:any, request: Request, response: Response, _:NextFunction) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({message: error.message})
    }
    return response.status(500).json({message: "Internal server error"})

})



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))