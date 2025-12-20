const inputElement = document.querySelector("#text-input");
const selectElement = document.querySelector("#color-select");
const cardElement = document.querySelector("#card");

const cardColors = {
  red: "lightcoral",
  blue: "lightskyblue",
  green: "lightgreen",
};

const handleInput = (e) => {
  cardElement.textContent = e.target.value;
};

const handleInputFocus = () => {
  inputElement.style.outline = "2px solid lightslategray";
  inputElement.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
};

const handleInputBlur = () => {
  inputElement.style.outline = "";
  inputElement.style.backgroundColor = "";
};

const handleSelectChange = (e) => {
  cardElement.style.backgroundColor = cardColors[e.target.value];
};

inputElement.addEventListener("input", handleInput);
inputElement.addEventListener("focus", handleInputFocus);
inputElement.addEventListener("blur", handleInputBlur);
selectElement.addEventListener("change", handleSelectChange);
