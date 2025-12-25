const filmForm = document.querySelector("#film-form");
const filmTableBody = document.querySelector("#film-tbody");

const filmFormTitle = document.getElementById("title");
const filmFormGenre = document.getElementById("genre");
const filmFormReleaseYear = document.getElementById("releaseYear");
const filmFormIsWatched = document.getElementById("isWatched");

const filmSortContainer = document.querySelector(".sort-container");
const filmSortTitle = document.querySelector("#sort-film-title");
const filmSortGenre = document.querySelector("#sort-film-genre");
const filmSortYear = document.querySelector("#sort-film-year");
const filmSortStatus = document.querySelector("#sort-film-status");
const filmDeleteAllButton = document.querySelector("#delete-films");

const EMAIL = "ovikdevil@gmail.com";
const SERVER_NAME = "https://sb-film.skillbox.cc/films";

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

const renderTable = async (serverName = SERVER_NAME) => {
  const filmsResponse = await fetch(serverName, {
    headers: {
      email: EMAIL,
    },
  });

  const films = await filmsResponse.json();

  filmTableBody.innerHTML = "";

  films.forEach((film) => {
    filmTableBody.insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td class="film-title">${film.title}</td>
            <td class="film-genre">${film.genre}</td>
            <td class="film-year">${film.releaseYear}</td>
            <td class="film-is-watched">${film.isWatched ? "Да" : "Нет"}</td>
            <td>
                <button class="delete-button" id="delete-film" data-id="${
                  film.id
                }">
                  Удалить
                </button>
            </td>
        </tr>`
    );
  });
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const errorMessage = getFilmFormErrorMessage();

  if (filmForm.querySelector(".error-message")) {
    filmForm.querySelector(".error-message").remove();
  }

  if (errorMessage === "") {
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

    addFilm(film);
    clearFormFields();
  } else {
    filmForm.insertAdjacentHTML(
      "beforeend",
      `<p class="error-message">${errorMessage}</p>`
    );
  }
};

const addFilm = async (film) => {
  await fetch(SERVER_NAME, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: EMAIL,
    },
    body: JSON.stringify(film),
  });

  renderTable();
};

const deleteFilm = async (button) => {
  const filmId = button.dataset.id;

  const response = await fetch(`${SERVER_NAME}/${filmId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      email: EMAIL,
    },
  });

  renderTable();
};

const deleteAllFilms = async () => {
  const response = await fetch(`${SERVER_NAME}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      email: EMAIL,
    },
  });

  renderTable();
};

const sortFilms = async () => {
  const title = filmSortTitle.value;
  const genre = filmSortGenre.value;
  const releaseYear = filmSortYear.value;
  const isWatched = filmSortStatus.value;

  const params = new URLSearchParams();

  if (title) params.append("title", title);
  if (genre) params.append("genre", genre);
  if (releaseYear) params.append("releaseYear", releaseYear);

  if (isWatched === "watched") {
    params.append("isWatched", "true");
  } else if (isWatched === "unwatched") {
    params.append("isWatched", "false");
  }

  const filteredURL = `${SERVER_NAME}?${params.toString()}`;
  renderTable(filteredURL);
};

renderTable();

filmForm.addEventListener("submit", handleFormSubmit);
filmDeleteAllButton.addEventListener("click", deleteAllFilms);
filmSortContainer.addEventListener("input", sortFilms);
filmTableBody.addEventListener("click", (e) => {
  const deleteFilmButton = e.target.closest("#delete-film");

  if (deleteFilmButton) {
    deleteFilm(deleteFilmButton);
  }
});
