import "./styles/style.css";
import "../css/landing.css"

import { getAllProducts} from "./services";
import { renderProducts } from "./products";

const $app = document.querySelector("#product-list");
const $farmerList = document.querySelector("#farmer-list"); 

document.addEventListener("DOMContentLoaded", () => {
  getAllProducts().then((products) => {
    products.forEach((product) => {
      $app.appendChild(renderProducts(product));
    });
  });
});

getAllFarmers().then((farmers) => {
  farmers.forEach((farmer) => {
    $farmerList.appendChild(renderFarmers(farmer));
  });
});

