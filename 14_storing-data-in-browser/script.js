const filmFormElement = document.querySelector("#film-form");
const filmTableBody = document.querySelector("#film-tbody");

const filmFormTitle = document.querySelector("#title");
const filmFormGenre = document.querySelector("#genre");
const filmFormReleaseYear = document.querySelector("#releaseYear");
const filmFormIsWatched = document.querySelector("#isWatched");
const filmFormSubmitButton = document.querySelector("#submitFilm");

const filmSelectElement = document.querySelector("select");
const filmSortButton = document.querySelector(".sort-button");

let currentEditingFilm = null;

const renderTable = () => {
  const films = JSON.parse(localStorage.getItem("films")) || [];

  filmTableBody.innerHTML = "";

  films.forEach((film) => {
    filmTableBody.insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td class="film-title">${film.title}</td>
            <td class="film-genre">${film.genre}</td>
            <td class="film-year">${film.releaseYear}</td>
            <td class="film-watched">${film.isWatched ? "Да" : "Нет"}</td>
            <td>
                <button class="edit-film">Редактировать</button>
                <button class="remove-film">Удалить</button>
            </td>
        </tr>    
    `
    );
  });
};

const clearFormFields = () => {
  filmFormTitle.value = "";
  filmFormGenre.value = "";
  filmFormReleaseYear.value = "";
  filmFormIsWatched.checked = false;
};

const getFilmFormErrorMessage = () => {
  if (
    filmFormTitle.value.trim() == "" ||
    filmFormGenre.value.trim() == "" ||
    filmFormReleaseYear.value.trim() == ""
  ) {
    return "Заполните все необходимые поля";
  }

  if (isNaN(Number(filmFormReleaseYear.value))) {
    return "Год выпуска должен являться числом";
  }

  if (!isNaN(parseInt(filmFormGenre))) {
    return "Жанр фильма должен являться строкой";
  }

  return "";
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  let errorMessage = getFilmFormErrorMessage();

  if (filmFormElement.querySelector(".error-message")) {
    filmFormElement.querySelector(".error-message").remove();
  }

  if (errorMessage == "") {
    const title = filmFormTitle.value;
    const genre = filmFormGenre.value;
    const releaseYear = filmFormReleaseYear.value;
    const isWatched = filmFormIsWatched.checked;

    const film = {
      title,
      genre,
      releaseYear,
      isWatched,
    };

    addFilmToLocalStorage(film);
    clearFormFields();
  } else {
    filmFormElement.insertAdjacentHTML(
      "beforeend",
      `<p class="error-message">${errorMessage}</p>`
    );
  }
};

const addFilmToLocalStorage = (film) => {
  const films = JSON.parse(localStorage.getItem("films")) || [];

  films.push(film);
  localStorage.setItem("films", JSON.stringify(films));

  renderTable();
};

const deleteFilmFromLocalStorage = (filmObj) => {
  let films = JSON.parse(localStorage.getItem("films"));

  films = films.filter((film) => {
    return (
      film.title !== filmObj.title ||
      Number(film.releaseYear) !== Number(filmObj.releaseYear) ||
      film.genre !== filmObj.genre
    );
  });

  localStorage.setItem("films", JSON.stringify(films));
};

const deleteFilm = (button) => {
  let title = button.closest("tr").querySelector(".film-title").textContent;
  let genre = button.closest("tr").querySelector(".film-genre").textContent;
  let releaseYear = button
    .closest("tr")
    .querySelector(".film-year").textContent;
  let isWatched = button
    .closest("tr")
    .querySelector(".film-watched").textContent;

  const film = {
    title,
    genre,
    releaseYear: Number(releaseYear),
    isWatched: isWatched === "Да",
  };

  deleteFilmFromLocalStorage(film);

  renderTable();
};

const startFilmEditing = (button) => {
  let title = button.closest("tr").querySelector(".film-title").textContent;
  let genre = button.closest("tr").querySelector(".film-genre").textContent;
  let releaseYear = button
    .closest("tr")
    .querySelector(".film-year").textContent;
  let isWatched = button
    .closest("tr")
    .querySelector(".film-watched").textContent;

  filmFormTitle.value = title;
  filmFormGenre.value = genre;
  filmFormReleaseYear.value = releaseYear;
  filmFormIsWatched.checked = isWatched == "Да" ? true : false;

  currentEditingFilm = {
    title,
    genre,
    releaseYear: Number(releaseYear),
    isWatched: isWatched === "Да",
  };

  if (document.querySelector(".update-button")) {
    oldUpdateBtn.remove();
  }
  if (document.querySelector(".cancel-editing-button")) {
    oldCancelBtn.remove();
  }

  filmFormSubmitButton.style.display = "none";
  filmFormElement.insertAdjacentHTML(
    "beforeend",
    `
        <button class="update-button">Обновить</button>
        <button class="cancel-editing-button">Отменить редактирование</button>
    `
  );

  document
    .querySelector(".update-button")
    .addEventListener("click", updateFilmData);
  document
    .querySelector(".cancel-editing-button")
    .addEventListener("click", cancelEditing);
};

const updateFilmData = () => {
  let errorMessage = getFilmFormErrorMessage();

  if (filmFormElement.querySelector(".error-message")) {
    filmFormElement.querySelector(".error-message").remove();
  }

  if (errorMessage == "") {
    const title = filmFormTitle.value;
    const genre = filmFormGenre.value;
    const releaseYear = filmFormReleaseYear.value;
    const isWatched = filmFormIsWatched.checked;

    const updatedFilm = {
      title,
      genre,
      releaseYear,
      isWatched,
    };

    deleteFilmFromLocalStorage(currentEditingFilm);
    addFilmToLocalStorage(updatedFilm);

    currentEditingFilm = null;
    cancelEditing();
    renderTable();
  } else {
    filmFormElement.insertAdjacentHTML(
      "beforeend",
      `<p class="error-message">${errorMessage}</p>`
    );
  }
};

const cancelEditing = () => {
  clearFormFields();
  document.querySelector(".update-button").remove();
  document.querySelector(".cancel-editing-button").remove();
  filmFormSubmitButton.style.display = "inline-block";
};

const handleFilmSort = () => {
  const films = JSON.parse(localStorage.getItem("films"));

  console.log(parseInt("121"));

  if (filmSelectElement.value == "title") {
    films.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filmSelectElement.value == "year") {
    films.sort((a, b) => a.releaseYear - b.releaseYear);
  } else {
    films.sort((a, b) => a.genre.localeCompare(b.genre));
  }

  localStorage.setItem("films", JSON.stringify(films));
  renderTable();
};

renderTable();

filmFormElement.addEventListener("submit", handleFormSubmit);
filmTableBody.addEventListener("click", (event) => {
  let removeButton = event.target.closest(".remove-film");
  let editButton = event.target.closest(".edit-film");

  if (removeButton) {
    deleteFilm(removeButton);
  }

  if (editButton) {
    startFilmEditing(editButton);
  }
});
filmSortButton.addEventListener("click", handleFilmSort);
