// import { obtenerVendedores } from "../controllers/vendedores.controller";

// //requerimos el metodo router de express.
import { Router } from "express";
// // Inicializamos el metodo.
const vendedorRouter = Router();

// // Creamos una ruta /register con el metodo 'POST' ya que recibiremos datos desde el cliente a traves de este metodo.
// vendedorRouter.post("/vendedores/:prod", obtenerVendedores);
// // Exportamos las rutas
export { vendedorRouter };
