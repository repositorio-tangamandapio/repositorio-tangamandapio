export function renderSellers(product) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col-12", "col-sm-6", "col-lg-4");

  const card = document.createElement("div");
  card.classList.add("card", "shadow-lg", "border-0", "rounded-4");

  const cardImage = document.createElement("img");
  cardImage.src = product.image;
  cardImage.classList.add("card-img-top", "rounded-top-4");
  cardImage.alt = "Imagen del cultivo";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "text-center", "fw-bold");
  cardTitle.textContent = product.producerName;

  const locationParagraph = document.createElement("p");
  locationParagraph.classList.add(
    "card-text",
    "text-muted",
    "text-center",
    "mb-1"
  );
  const locationIcon = document.createElement("i");
  locationIcon.classList.add("bi", "bi-geo-alt-fill");
  const locationText = document.createTextNode(
    " Ubicación: " + product.location
  );
  locationParagraph.appendChild(locationIcon);
  locationParagraph.appendChild(locationText);

  const priceContainer = document.createElement("div");
  priceContainer.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "mb-3"
  );

  const priceIcon = document.createElement("i");
  priceIcon.classList.add("bi", "bi-tags-fill", "text-success", "me-1");

  const priceSpan = document.createElement("span");
  priceSpan.classList.add("fw-bold");
  priceSpan.textContent = product.price;

  priceContainer.appendChild(priceIcon);
  priceContainer.appendChild(priceSpan);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(locationParagraph);
  cardBody.appendChild(priceContainer);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  cardContainer.appendChild(card);

  return cardContainer;
}
