import {
  getContainerEl,
  getHeaderEl,
  getAddButtonEl,
  getTableEl,
} from "./components.js";
import { deleteItemFromLocalStorage } from "./localstorage.js";
import navigate from "./navigate.js";
import { setLoader, removeLoader } from "./utils.js";

const createStorePage = () => {
  document.querySelector("body").innerHTML = "";

  setLoader();

  const containerElement = getContainerEl();

  const headerContainerElement = document.createElement("div");
  headerContainerElement.classList.add("header-container");

  const header = getHeaderEl("Склад");
  header.classList.add("store-header");
  headerContainerElement.append(header);

  const addButton = getAddButtonEl("Добавить запись");
  addButton.classList.add("store-button");
  headerContainerElement.append(addButton);

  addButton.addEventListener("click", () => {
    navigate("add-form");
  });

  const items = JSON.parse(localStorage.getItem("items")) || [];

  const table = getTableEl(items);

  table.addEventListener("click", (e) => {
    let deleteButton = e.target.closest(".delete-button");

    if (deleteButton) {
      deleteItemFromLocalStorage(deleteButton);
      navigate();
    }
  });

  containerElement.append(headerContainerElement);
  containerElement.append(table);

  removeLoader();

  document.querySelector("body").append(containerElement);
};

export default createStorePage;
