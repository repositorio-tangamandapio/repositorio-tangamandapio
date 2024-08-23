import { cliente } from "../db/database.js";
import { validarJWT } from "../helpers/validarJWT.js";
import { ObjectId } from "mongodb";
const client = cliente();
export const obtenerProductos = async (req, res) => {
  client.connect();
  const lista = client.db("agrofsa").collection("Productos").find({});
  const productos = await lista.toArray();
  res.json(productos);
};

export const obtenerProducto = async (req, res) => {
  const { prod } = req.params;
  console.log(prod);
  client.connect();
  const lista = client
    .db("agrofsa")
    .collection("Productos")
    .findOne({ Nombre: prod });
  const producto = await lista;
  if (!lista) {
    res.send("No se encontró el elemento").status(400);
  } else {
    res.send(producto);
  }
};
