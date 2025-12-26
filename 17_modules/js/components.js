import { getFormErrorMessage } from "./utils.js";
import { addItemToLocalStorage } from "./localstorage.js";
import navigate from "./navigate.js";

export const getContainerEl = () => {
  const containerElement = document.createElement("div");
  containerElement.classList.add("container");

  return containerElement;
};

export const getHeaderEl = (text) => {
  const header = document.createElement("h1");
  header.classList.add("header");
  header.textContent = text;

  return header;
};

export const getAddButtonEl = (text) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("add-button");

  return button;
};

export const getTableEl = (items) => {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const tableHeadRow = document.createElement("tr");

  const tableHeaders = ["Название", "Полка", "Вес", "Время хранения", ""];

  for (let i = 0; i < tableHeaders.length; i++) {
    const tableHeadData = document.createElement("th");
    tableHeadData.textContent = tableHeaders[i];

    tableHeadRow.append(tableHeadData);
  }

  tableHead.append(tableHeadRow);

  if (items.length > 0) {
    items.forEach((item) => {
      const tableBodyRow = document.createElement("tr");

      for (let key in item) {
        const tableData = document.createElement("td");
        tableData.classList.add(`item-${key}`);

        if (key == "id") {
          const deleteButton = getDeleteButtonEl("Удалить");
          deleteButton.dataset.id = item[key];

          tableData.append(deleteButton);
        } else {
          tableData.textContent = item[key];
        }

        tableBodyRow.append(tableData);
      }

      tableBody.append(tableBodyRow);
    });
  }

  table.append(tableHead);
  table.append(tableBody);

  return table;
};

export const getDeleteButtonEl = (text) => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = text;
  deleteButton.classList.add("delete-button");

  return deleteButton;
};

export const getFormEl = () => {
  const form = document.createElement("form");

  const titleInput = getInputEl("text", "title-input", "Название");
  form.append(titleInput);

  const shelfInput = getInputEl("text", "shelf-input", "Полка");
  form.append(shelfInput);

  const weightInput = getInputEl("text", "weight-input", "Вес");
  form.append(weightInput);

  const dateInput = getInputEl("date", "date-input");
  form.append(dateInput);

  const button = getAddButtonEl("Добавить запись");
  button.classList.add("form-button");

  form.append(button);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let errorMessage = getFormErrorMessage(form);

    if (form.querySelector(".error-message")) {
      form.querySelector(".error-message").remove();
    }

    if (errorMessage == "") {
      const title = titleInput.value;
      const shelf = shelfInput.value;
      const weight = weightInput.value;
      const date = dateInput.value;

      const item = {
        title,
        shelf,
        weight,
        date,
        id: Date.now(),
      };

      addItemToLocalStorage(item);

      navigate();
    } else {
      const error = document.createElement("p");
      error.classList.add("error-message");
      error.textContent = errorMessage;
      form.append(error);
    }
  });

  return form;
};

export const getInputEl = (type, id, placeholder = "") => {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;

  return input;
};
