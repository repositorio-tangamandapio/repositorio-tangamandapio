import {
  obtenerProductos,
  obtenerProducto,
} from "../controllers/tareas.controller.js";

import { Router } from "express";

const tareasRouter = Router();

tareasRouter.get("/productos", obtenerProductos);

tareasRouter.get("/productos/:id", obtenerProducto);

// tareasRouter.post("/tareas", crearTarea);

// tareasRouter.put("/tareas/:id", actualizarTarea);

// tareasRouter.delete("/tareas/:id", eliminarTarea);

export { tareasRouter };
