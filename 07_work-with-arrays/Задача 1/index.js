const addButtonElement = document.querySelector(".add-button");
const findButtonElement = document.querySelector(".find-button");
const booksListElement = document.querySelector(".books");

const books = [];

const handleAddButtonClick = () => {
  let newBook = prompt("Какую книгу добавить?");

  if (newBook.trim() == "") {
    alert("Название книги не введено!");
  } else {
    books.push(newBook);

    booksListElement.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
      let listElement = document.createElement("li");
      listElement.textContent = `${i + 1}) ${books[i]}`;
      booksListElement.append(listElement);
    }
  }
};

const handleFindButtonClick = () => {
  let lostBook = prompt("Какую книгу найти?").toLowerCase();

  booksListElement.innerHTML = "";
  let foundFlag = false;

  for (let i = 0; i < books.length; i++) {
    let listElement = document.createElement("li");
    listElement.textContent = `${i + 1}) ${books[i]}`;

    if (books[i].toLowerCase() == lostBook) {
      listElement.classList.add("active");
      foundFlag = true;
    }

    if (i + 1 == books.length && foundFlag == false) {
      alert("Книга не найдена!");
    }

    booksListElement.append(listElement);
  }
};

addButtonElement.addEventListener("click", handleAddButtonClick);
findButtonElement.addEventListener("click", handleFindButtonClick);
