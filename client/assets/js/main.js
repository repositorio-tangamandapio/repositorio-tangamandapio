import { getAllProducts, getProduct, getSellers } from "./services";
import { renderSellers } from "./sellers";
import { renderProducts } from "./products";
const $productList = document.querySelector("#product-list");
const $sellerList = document.querySelector("#seller-list");
const $productTitle = document.querySelector("#productTitle");

//Página de productos
if ($productTitle) {
  getProduct().then((info) => ($productTitle.textContent = info.Nombre));
  getProduct().then((info) =>
    document.querySelector("#cPhoto").setAttribute("src", `${info.img}`)
  );
  getProduct().then(
    (info) => (document.querySelector("#Precio").textContent = info.precioVenta)
  );
}

//Landing
if ($productList) {
  getAllProducts().then((products) => {
    products.forEach((product) => {
      $productList.appendChild(renderProducts(product));
    });
  });
}

//Página del producto individual
if ($sellerList) {
  getSellers().then((seller) => {
    seller.forEach((seller) => {
      $sellerList.appendChild(renderSellers(seller));
    });
  });
}

// document.querySelector(".btnEnviar").addEventListener("click", () => {
//   const precio = document.querySelector("#precio").value;
//   const cantidad = document.querySelector("#cantidad").value;
//   const info = {
//     precio,
//     cantidad,
//   };
//   enviarOrden(info);
// });
document.querySelector("#logout").addEventListener("click", () => {
  console.log("hola");
  window.localStorage.removeItem("token");
  window.location.href = "./landing";
});
// getAllFarmers().then((farmers) => {
//   farmers.forEach((farmer) => {
//     $farmerList.appendChild(renderFarmers(farmer));
//   });
// });
