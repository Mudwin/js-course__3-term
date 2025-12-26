export const addItemToLocalStorage = (item) => {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(item);

  localStorage.setItem("items", JSON.stringify(items));
};

export const deleteItemFromLocalStorage = (deleteButton) => {
  const itemId = Number(deleteButton.dataset.id);

  let items = JSON.parse(localStorage.getItem("items"));
  items = items.filter((item) => item.id !== itemId);
  localStorage.setItem("items", JSON.stringify(items));
};
