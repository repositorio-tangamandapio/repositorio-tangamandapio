//requerimos el metodo router de express.
import { Router } from "express";
// import { applyValidations } from "../middlewares";
// import { createUser } from "../../validations/validations.js";
import { register, login, getAll } from "../controllers/auth.controller.js";

// Inicializamos el metodo.
const userRouter = Router();

// Lo mismo que el registro pero con el login.
userRouter.post("/login", login);

userRouter.get("/users", getAll);
// Exportamos las rutas
export { userRouter };
