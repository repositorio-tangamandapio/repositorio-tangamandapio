export const renderProducts = (product) => {
  const $productContainer = document.createElement("div");
  $productContainer.classList.add("item");

  const $productImg = document.createElement("img");
  $productImg.src = product.img; 
  $productContainer.appendChild($productImg);

  const $productInfo = document.createElement("div");
  $productInfo.classList.add("info");
  $productContainer.appendChild($productInfo);

  const $productTitle = document.createElement("h5");
  $productTitle.textContent = product.title;
  $productInfo.appendChild($productTitle);

  const $productDiv = document.createElement("div");
  $productDiv.classList.add("info-container");
  $productInfo.appendChild($productDiv);

  const $btcContainer = document.createElement("div");
  $btcContainer.classList.add("btc");
  $productDiv.appendChild($btcContainer);

  const $precioProduct = document.createElement("p");
  $precioProduct.textContent = "Último precio"; 
  $btcContainer.appendChild($precioProduct);

  const $iconoEl = document.createElement("i");
  $iconoEl.classList.add("bx bx-line-chart");
  $btcContainer.appendChild($iconoEl);

  const $bidA = document.createElement("a");
  $bidA.href = "#";
  $bidA.classList.add("justify-content-center");
  $bidA.textContent = "Ver";
  $productContainer.appendChild($bidA);

  return $productContainer;
};