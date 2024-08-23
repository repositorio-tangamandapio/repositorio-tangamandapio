import { body } from "express-validator";

const { body } = require("express-validator");

export const validateUser = [
  body("name")
    .isString()
    .withMessage("El nombre de usuario debe ser una cadena de caracteres")
    .isLength({ min: 5, max: 20 })
    .withMessage("El nombre de usuario debe tener entre 5 y 20 caracteres"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Debes ingresar un correo electrónico válido"),
  body("password")
    .isString()
    .withMessage("La contraseña debe ser una cadena de caracteres")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .withMessage(
      "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"
    ),
];

export const validatePostProduct = [
  body()
    .isString("name")
    .withMessage("El nombre de usuario debe ser una cadena de caracteres")
    .isLength({ min: 5, max: 20 })
    .withMessage("El nombre de usuario debe tener entre 5 y 20 caracteres"),
  body("contact").isString.withMessage("El telefono debe ser un string"),
  body("price").isNumeric().withMessage("El precio debe ser number"),
];
