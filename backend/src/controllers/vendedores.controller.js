import { cliente } from "../db/database.js";
import { validarJWT } from "../helpers/validarJWT.js";
const client = cliente();
export const obtenerVendedores = async (req, res) => {
  const { prod } = req.params;
  client.connect();
  const lista = client
    .db("agrofsa")
    .collection("Ofertas")
    .find({ Producto: prod });
  const productos = await lista.toArray();
  res.json(productos);
};

export const agregarOrden = async (req, res) => {
  const { prod } = req.params;
  client.connect();
  const peticion = client
    .db("agrofsa")
    .collection("Ofertas")
    .insertOne({
      Producto: prod,
      Cantidad: req.body.cantidad,
      Precio: req.body.precio,
      Nombre: req.body.nombre,
    });
  res.json(productos);
};
