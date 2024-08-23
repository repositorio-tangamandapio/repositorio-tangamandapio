import bcrypt from "bcrypt";
import { generarJWT } from "../helpers/generarJWT.js";
import { cliente } from "../db/database.js";
const client = cliente();
export const register = async (req, res) => {
  // Desestructuramos los datos que vienen del cuerpo de la peticion.
  const { nombre, apellido, dni, contrasenia } = req.body;

  const hashContrasenia = bcrypt.hashSync(contrasenia, 10);

  await client.db("agrofsa").collection("Usuarios").insertOne({
    Nombre: nombre,
    Apellido: apellido,
    DNI: dni,
    contrasenia: hashContrasenia,
  });
  // Respondemos a nuestro cliente
  res.json({
    msg: "Registrado correctamente",
  });
};

export const login = async (req, res) => {
  const { dni, contrasenia } = req.body;

  // Buscamos el usuario en la bd.
  const buscarUsuario = await client
    .db("agrofsa")
    .collection("Usuarios")
    .findOne({ DNI: `${dni}` });

  // En caso de que no se encuentre ningun usuario, retornamos un error.
  if (!buscarUsuario) {
    return res.status(400).json({
      msg: "El usuario no existe",
    });
  }

  // Comparamos las contraseñas con el metodo compareSync que nos devolvera un true o false.
  const validarContrasenia = bcrypt.compareSync(
    contrasenia,
    buscarUsuario.contrasenia
  );

  // En caso de que no coincidan, retornamos un error sin dar información especifica de lo que fallo.
  if (!validarContrasenia) {
    return res.status(401).json({
      msg: "El usuario o contraseña no coiciden",
    });
  }

  // Hacemos uso del helper para generar el token y le pasamos el id.
  const token = await generarJWT({ id: buscarUsuario.id });

  //Retornamos el token con un mensaje al cliente.
  return res.json({
    msg: "Inicio de sesión exitoso",
    token,
  });
};
