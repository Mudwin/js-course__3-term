const addButtonElement = document.querySelector(".add-element");
const removeButtonElement = document.querySelector(".remove-element");
const listElement = document.querySelector(".list");

const handleAddButtonClick = () => {
  const newListItem = document.createElement("li");
  newListItem.textContent = "Новый элемент списка";
  listElement.append(newListItem);
};

const handleRemoveButtonClick = () => {
  listElement.lastElementChild.remove();
};

addButtonElement.addEventListener("click", handleAddButtonClick);
removeButtonElement.addEventListener("click", handleRemoveButtonClick);
