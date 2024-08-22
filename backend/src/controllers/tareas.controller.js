import { cliente } from "../db/database.js";
import { validarJWT } from "../helpers/validarJWT.js";
import { ObjectId } from "mongodb";
const client = cliente();
export const obtenerProductos = async (req, res) => {
  client.connect();
  const lista = client.db("agrofsa").collection("Productos").find({});
  const productos = await lista.toArray();
  console.log(productos);
  res.json(productos);
};

export const obtenerProducto = async (req, res) => {
  const { id } = req.params;
  client.connect();
  if (ObjectId.isValid(id)) {
    const o_id = ObjectId.createFromHexString(id);
    const lista = client
      .db("agrofsa")
      .collection("Productos")
      .findOne({ _id: o_id });
    const producto = await lista;
    res.send(producto);
  } else {
    res.send("No es posible encontrar el producto").status(400);
  }
};
