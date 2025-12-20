const addHeightButtonElement = document.querySelector(".add-height");
const sortHeightButtonElement = document.querySelector(".sort-height");
const listElement = document.querySelector(".list");

const heights = [164, 157, 160, 143, 170];

const handleAddHeightButtonClick = () => {
  let newHeight = prompt("Введите рост ученика");

  if (
    newHeight.trim() == "" ||
    isNaN(Number(newHeight.trim())) ||
    newHeight <= 0
  ) {
    alert("Рост не введён!");
  }

  heights.push(newHeight);
  refreshDOM();
};

const handleSortHeightButtonClick = () => {
  let minimumHeight = prompt("Введите минимальный рост").trim();

  if (minimumHeight == "" || isNaN(Number(minimumHeight))) {
    refreshDOM();
    return;
  }

  listElement.innerHTML = "";
  let count = 1;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] < Number(minimumHeight)) {
      continue;
    }

    let listItem = document.createElement("li");
    listItem.textContent = `${count}) ${heights[i]}`;
    count += 1;
    listElement.append(listItem);
  }
};

const refreshDOM = () => {
  listElement.innerHTML = "";

  for (let i = 0; i < heights.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `${i + 1}) ${heights[i]}`;
    listElement.append(listItem);
  }
};

refreshDOM();

addHeightButtonElement.addEventListener("click", handleAddHeightButtonClick);
sortHeightButtonElement.addEventListener("click", handleSortHeightButtonClick);

console.log();
