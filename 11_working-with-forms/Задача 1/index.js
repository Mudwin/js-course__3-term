const form = document.querySelector(".form");
const usernameFieldElement = form.username;
const emailFieldElement = form.email;
const sexFieldElements = form.sex;
const ratingFieldElement = form.rating;
const interestsFieldElements = form.interests;
const commentsFieldElement = form.comments;
const submitButtonElement = form.button;
const resultsContainerElement = document.querySelector(".results");

const handleFormSubmit = (event) => {
  event.preventDefault();

  let headerElement = document.createElement("h2");
  headerElement.textContent = "Результаты опроса:";
  resultsContainerElement.append(headerElement);

  let usernameContainer = document.createElement("div");
  usernameContainer.textContent = `Имя пользователя: ${usernameFieldElement.value}`;
  resultsContainerElement.append(usernameContainer);

  let emailContainer = document.createElement("div");
  emailContainer.textContent = `Email: ${emailFieldElement.value}`;
  resultsContainerElement.append(emailContainer);

  let sexContainer = document.createElement("div");
  sexContainer.textContent = `Пол: ${sexFieldElements.value}`;
  resultsContainerElement.append(sexContainer);

  let ratingContainer = document.createElement("div");
  ratingContainer.textContent = `Оценка сервиса: ${ratingFieldElement.value}`;
  resultsContainerElement.append(ratingContainer);

  let interestsContainer = document.createElement("div");
  let checkedInterests = Array.from(interestsFieldElements)
    .filter((interest) => interest.checked)
    .map((interest) => interest.value);
  interestsContainer.textContent = `Интересы пользователя: ${checkedInterests}`;
  resultsContainerElement.append(interestsContainer);

  let commentsContainer = document.createElement("div");
  commentsContainer.textContent = `Дополнительные комментарии: ${commentsFieldElement.value}`;
  resultsContainerElement.append(commentsContainer);
};

form.addEventListener("submit", handleFormSubmit);
