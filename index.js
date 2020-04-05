/* ==================== */
/* ===== API AREA ===== */
/* ==================== */
let intervalId = null;

function makeMockupData() {
  const dataQuantity = Math.round(Math.random() * 9);
  const data = new Array(dataQuantity).fill(null).map(() => {
    return {
      time: new Date().getTime(),
      value: Math.round(Math.random() * 100),
    };
  });
  return data;
}

window.addEventListener("load", () => {
  intervalId = setInterval(() => {
    new Promise((resolve) => {
      resolve(makeMockupData());
    }).then((result) => {
      activeChart(result);
    });
  }, 1000);
});

window.addEventListener("unload", () => {
  if (intervalId != null) {
    clearInterval(intervalId);
  }
});

/* ======================= */
/* ===== CLIENT AREA ===== */
/* ======================= */
const chart = document.querySelector(".chart");

function activeChart(data) {
  const pixelContainer = document.createElement("div");
  pixelContainer.style.position = "relative";
  pixelContainer.style.width = "5px";

  data.forEach((item) => {
    const pixel = document.createElement("div");
    pixel.style.position = "absolute";
    pixel.style.width = "5px";
    pixel.style.height = "5px";
    pixel.style.bottom = `${item.value * 2.5}px`;
    pixel.style.backgroundColor = "green";

    pixelContainer.appendChild(pixel);
  });

  chart.appendChild(pixelContainer);
}
