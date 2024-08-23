import jwt from "jsonwebtoken";
import { cliente } from "../db/database.js";
import { ObjectId } from "mongodb";
const client = cliente();
export const validarJWT = async (token) => {
  try {
    // Usamos el metodo verify para verificar el token.
    // El primer parametro es el token que recibimos por el header, y el segun el secret con el que firmamos el token.
    const { id } = jwt.verify(token, "mysecret");
    if (ObjectId.isValid(id)) {
      const o_id = ObjectId.createFromHexString(id);
    }
    const usuario = client
      .db("agrofsa")
      .collection("Usuarios")
      .findOne({ _id: o_id });

    // En caso de que no exista retornamos false.
    if (!usuario) {
      return false;
    } else {
      return usuario;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
