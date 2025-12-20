const addProductButtonElement = document.querySelector(".add-product");
const productsListElement = document.querySelector(".products");

const products = [
  "Молоко",
  "Сахар",
  "Яблоки",
  "Книга",
  "Арбуз",
  "Макароны",
  "Кофе",
];

const handleAddProductButton = () => {
  let newProduct = prompt("Введите название товара").trim();

  if (newProduct == "") {
    alert("Название товара не введено!");
    return;
  }

  products.push(newProduct);
  refreshDOM();
};

const refreshDOM = () => {
  productsListElement.innerHTML = "";
  products.sort();

  for (let i = 0; i < products.length; i++) {
    let newProductsItem = document.createElement("li");
    newProductsItem.textContent = `${i + 1}) ${products[i]}`;
    productsListElement.append(newProductsItem);
  }
};

refreshDOM();

addProductButtonElement.addEventListener("click", handleAddProductButton);
