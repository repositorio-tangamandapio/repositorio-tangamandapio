import {
  obtenerProductos,
  obtenerProducto,
} from "../controllers/productos.controller.js";

import { Router } from "express";

const productosRouter = Router();

productosRouter.get("/productos", obtenerProductos);

productosRouter.post("/productos/:prod", obtenerProducto);

// tareasRouter.post("/tareas", crearTarea);

// tareasRouter.put("/tareas/:id", actualizarTarea);

// tareasRouter.delete("/tareas/:id", eliminarTarea);

export { productosRouter };
