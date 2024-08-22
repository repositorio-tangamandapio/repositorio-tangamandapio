import "./styles/style.css";

import { getAllProducts} from "./services";
import { renderProducts } from "./products";

const $app = document.querySelector("#nft-list");

document.addEventListener("DOMContentLoaded", () => {
  getAllProducts().then((tasks) => {
    tasks.forEach((task) => {
      $app.appendChild(renderProducts(task));
    });
  });
});
