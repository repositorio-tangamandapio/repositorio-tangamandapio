export const renderProducts = (product) => {
  const $productContainer = document.createElement("div");
  $productContainer.classList.add("item");

  const $productImg = document.createElement("img");
  $productImg.src = product.img;
  $productImg.classList.add("img-fluid");
  $productContainer.appendChild($productImg);

  const $productInfo = document.createElement("div");
  $productInfo.classList.add("info");
  $productContainer.appendChild($productInfo);

  const $productTitle = document.createElement("h5");
  $productTitle.textContent = product.Nombre;
  $productInfo.appendChild($productTitle);

  const $bidContainer = document.createElement("div");
  $bidContainer.classList.add("bid");
  $productInfo.appendChild($bidContainer);

  const $bidA = document.createElement("a");

  $bidA.classList.add("btn-view");
  $bidA.textContent = "Ver";
  $bidA.href = `/comprar?${product.Nombre}`;

  $bidContainer.appendChild($bidA);
  $productContainer.appendChild($bidContainer);

  return $productContainer;
};
