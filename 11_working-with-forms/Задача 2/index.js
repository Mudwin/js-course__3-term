const form = document.querySelector("form");
const titleFieldElement = form.title;
const weightFieldElement = form.weight;
const pathFieldElement = form.path;
const submitButtonElement = form.button;
const errorContainerElement = document.querySelector(".error-message");
const tableBodyElement = document.querySelector("tbody");

const handleFormSubmit = (e) => {
  e.preventDefault();
  errorContainerElement.textContent = "";

  let title = titleFieldElement.value;
  let weight = weightFieldElement.value;
  let path = pathFieldElement.value;

  if (weight < 0 || path < 0) {
    errorContainerElement.textContent =
      "Пожалуйста, введите корректные данные для веса и расстояния";
    return;
  }

  addNewRows(title, weight, path);
};

const addNewRows = (title, weight, path) => {
  let deliveryCost = (weight * path) / 10;

  tableBodyElement.insertAdjacentHTML(
    "beforeend",
    `<tr>
        <td>${title}</td>
        <td>${weight}</td>
        <td>${path}</td>
        <td>${deliveryCost.toFixed(2)} руб.</td>
    </tr>`
  );

  form.reset();
};

form.addEventListener("submit", handleFormSubmit);
