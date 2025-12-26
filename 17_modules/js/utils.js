export const getFormErrorMessage = (form) => {
  const title = form.querySelector("#title-input").value;
  const shelf = form.querySelector("#shelf-input").value;
  const weight = form.querySelector("#weight-input").value;
  const date = form.querySelector("#date-input").value;

  if (
    title.trim() == "" ||
    shelf.trim() == "" ||
    weight.trim() == "" ||
    date == ""
  ) {
    return "Заполните все поля";
  }

  if (isNaN(Number(weight))) {
    return "Вес должен быть числом";
  }

  return "";
};

export const getLoader = () => {
  const loader = document.createElement("span");
  loader.classList.add("loader");

  return loader;
};

export const setLoader = () => {
  const loader = getLoader();
  document.querySelector("body").append(loader);
};

export const removeLoader = () => {
  const loader = document.querySelector(".loader");
  loader.remove();
};
