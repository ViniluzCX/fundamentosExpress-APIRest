import { Router } from "express";
import { myMiddleware } from "../middlewares/middleware";
import { ProductsController } from "../controllers/Products_Controller";




const productsRoutes = Router()
const productsController = new ProductsController()
 
productsRoutes.get("/", productsController.index)

productsRoutes.post("/", myMiddleware, productsController.create)

export { productsRoutes } 