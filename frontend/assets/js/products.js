import { deleteTask, putTask } from "./services";

export const renderTask = (product) => {
  const $productContainer = document.createElement("div");
  $productContainer.classList.add("item");

  const $productImg = document.createElement("img");
  const $productInfo = document.createElement("div");
  $productInfo.classList.add("info");
  const $productTitle = document.createElement("h5");
  const $productDiv = document.createElement("div");
  $productDiv.classList.add("info-container");
  const $btcContainer = document.createElement("div")
  const $precioProduct = document.createElement("p")
  const $iconoEl = document.createElement("i")
  $iconoEl.classList.add("bx bx-line-chart")
  const $bidA = document.createElement("a")


  <div class="nft-list">
        <div class="item">
          <img src="assets/item-1.png" />
          <div class="info">
            <div class="info-container">
              <h5>Productor</h5>
              <div class="btc">
                
                <p>Último precio</p>
                <i class='bx bx-line-chart'></i>
              </div>
            </div>
          </div>
          <div class="bid">
            <a href="#" class="justify-conten-center">Ver</a>
          </div>
        </div>

  $taskContainer.appendChild(taskTitle);

  $taskDescription.classList.add("task-description");
  $taskDescription.textContent = task.description;

  if (task.isComplete) {
    $taskDescription.style.textDecoration = "line-through";
  }

  $taskContainer.appendChild($taskDescription);

  $taskIsCompleted.type = "checkbox";
  $taskIsCompleted.checked = task.isComplete;

  $taskIsCompleted.addEventListener("change", (event) => {
    task.isComplete = event.target.checked;
    taskTitle.style.textDecoration = task.isComplete ? "line-through" : "none";
    $taskDescription.style.textDecoration = task.isComplete
      ? "line-through"
      : "none";

    putTask(task.id, {
      title: task.title,
      description: task.description,
      isComplete: task.isComplete,
    });
  });

  $taskContainer.appendChild($taskIsCompleted);

  $taskDelete.textContent = "Delete";

  $taskDelete.addEventListener("click", () => {
    deleteTask(task.id).then(() => {
      $taskContainer.remove();
    });
  });

  $taskContainer.appendChild($taskDelete);

  return $taskContainer;
};
