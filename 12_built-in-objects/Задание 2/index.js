const containerElement = document.querySelector(".container");
const formElement = document.querySelector("form");
const inputElement = formElement.promocode;

const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%",
};

function getCookie() {
  return document.cookie.split("; ").reduce((acc, item) => {
    const [name, value] = item.split("=");
    acc[name] = value;
    return acc;
  }, {});
}

const handleFormSubmit = (e) => {
  e.preventDefault();

  if (inputElement.value.toUpperCase() === promocodeObj.promocode) {
    if (formElement.nextElementSibling) {
      formElement.nextElementSibling.remove();
    }

    approvePromocode();

    document.cookie = `promocode=${promocodeObj.promocode}`;
  } else {
    if (formElement.nextElementSibling) {
      formElement.nextElementSibling.remove();
    }

    inputElement.style.color = "black";
  }
};

const pageReload = () => {
  const cookie = getCookie();

  if (cookie.promocode !== undefined) {
    inputElement.value = cookie.promocode;

    approvePromocode();
  }
};

const approvePromocode = () => {
  containerElement.insertAdjacentHTML(
    "beforeend",
    `<p class="form-message">Промокод применен. ${promocodeObj.gift}</p>`
  );

  inputElement.style.color = "green";
};

pageReload();

formElement.addEventListener("submit", handleFormSubmit);
