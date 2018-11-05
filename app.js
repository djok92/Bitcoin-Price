const btn = document.querySelector(".prices-btn");
const container = document.querySelector(".currency-container");

btn.addEventListener("click", function () {
  container.style.display = "none";
  requestHandler();
  interfaceHandler();
});

function requestHandler() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const dollars = document.querySelector(".dollars__value");
  const pounds = document.querySelector(".pounds__value");
  const euros = document.querySelector(".euros__value");
  fetch(url)
    .then(data => data.json())
    .then(data => {
      dollars.textContent = `${data.bpi.USD.rate_float} \u0024`;
      pounds.textContent = `${data.bpi.GBP.rate_float} \u00A3`;
      euros.textContent = `${data.bpi.EUR.rate_float} \u20AC `;
    });
}

function interfaceHandler() {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.display = "block";
  setTimeout(() => {
    progressBar.style.display = "none";
    container.style.display = "block";
  }, 3200);
}