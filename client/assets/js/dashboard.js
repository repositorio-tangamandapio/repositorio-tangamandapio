import Chart from "chart.js/auto";
import { getAllSellers } from "./services";
(async function () {
  const data = [];
  new Chart(document.getElementById("acquisitions"), {
    type: "line",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Ventas el último año",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();

(async function () {
  const data = await getAllSellers().then((info) => {
    return info;
  });
  console.log(data);
  new Chart(document.getElementById("Usuarios"), {
    type: "bar",
    data: {
      labels: [true, false],
      datasets: [
        {
          label: "Es vendedor:",
          data: data.map((row) => row.Vendedor),
        },
      ],
    },
  });
})();
