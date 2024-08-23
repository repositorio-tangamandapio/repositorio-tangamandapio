import { body } from "express-validator";

const { body } = require("express-validator");

export const createUser = [
  body("nombre")
    .isString()
    .withMessage("El nombre de usuario debe ser una cadena de caracteres")
    .isLength({ min: 5, max: 20 })
    .withMessage("El nombre de usuario debe tener entre 5 y 20 caracteres"),
  body("apellido").isString().withMessage("El apellido debe ser un string"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Debes ingresar un correo electrónico válido"),
  body("contrasenia")
    .isString()
    .withMessage("La contraseña debe ser una cadena de caracteres")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .withMessage(
      "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"
    ),
];
