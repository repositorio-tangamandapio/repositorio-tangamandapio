import { getAllProducts } from "./services";
import { renderProducts } from "./products";

const $productList = document.querySelector("#product-list");
const $farmerList = document.querySelector("#farmer-list");
if ($productList) {
  console.log("hay producto");
  getAllProducts().then((products) => {
    products.forEach((product) => {
      $productList.appendChild(renderProducts(product));
    });
  });
}

// getAllFarmers().then((farmers) => {
//   farmers.forEach((farmer) => {
//     $farmerList.appendChild(renderFarmers(farmer));
//   });
// });
