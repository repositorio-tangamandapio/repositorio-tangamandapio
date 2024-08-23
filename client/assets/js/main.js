import { getAllProducts, getProduct, getSellers } from "./services";
import { renderSellers } from "./sellers";
import { renderProducts } from "./products";

const $productList = document.querySelector("#product-list");
const $sellerList = document.querySelector("#seller-list");
const $productTitle = document.querySelector("#productTitle");

if ($productTitle) {
  getProduct().then((info) => ($productTitle.textContent = info.Nombre));
}
if ($productList) {
  getAllProducts().then((products) => {
    products.forEach((product) => {
      $productList.appendChild(renderProducts(product));
    });
  });
}
if ($sellerList) {
  getSellers().then((seller) => {
    seller.forEach((seller) => {
      $sellerList.appendChild(renderSellers(seller));
    });
  });
}

// getAllFarmers().then((farmers) => {
//   farmers.forEach((farmer) => {
//     $farmerList.appendChild(renderFarmers(farmer));
//   });
// });
