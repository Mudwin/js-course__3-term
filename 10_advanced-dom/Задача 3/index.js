const ascendingSortButtonElement = document.querySelector(".ascending-sort");
const descendingSortButtonElement = document.querySelector(".descending-sort");
const priceListElement = document.querySelector(".list");

const prices = [100, 500, 250, 750, 300];

const handleAscendingSortButton = () => {
  prices.sort((a, b) => a - b);
  refreshDOM();
};

const handleDescendingSortButton = () => {
  prices.sort((a, b) => b - a);
  refreshDOM();
};

const refreshDOM = () => {
  priceListElement.innerHTML = "";

  prices.forEach((price) => {
    let newPriceElement = document.createElement("li");
    newPriceElement.textContent = price;
    priceListElement.append(newPriceElement);
  });
};

refreshDOM();

ascendingSortButtonElement.addEventListener("click", handleAscendingSortButton);
descendingSortButtonElement.addEventListener(
  "click",
  handleDescendingSortButton
);
