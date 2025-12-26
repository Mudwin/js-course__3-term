import { getContainerEl, getHeaderEl, getFormEl } from "./components.js";
import { setLoader, removeLoader } from "./utils.js";

const createAddFormPage = () => {
  document.querySelector("body").innerHTML = "";

  setLoader();

  const container = getContainerEl();

  const header = getHeaderEl("Добавить запись");
  header.classList.add("form-header");
  container.append(header);

  const form = getFormEl();
  container.append(form);

  removeLoader();

  document.querySelector("body").append(container);
};

export default createAddFormPage;
