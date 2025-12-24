const containerElement = document.querySelector(".container");
const formElement = document.querySelector("form");
const inputElement = formElement.promocode;

const promocodeArr = [
  {
    promocode: "PROM10",
    gift: "Скидка 10%",
  },
  {
    promocode: "PROM50",
    gift: "Скидка 50%",
  },
  {
    promocode: "GIFT",
    gift: "Подарок в корзине",
  },
];

function getCookie() {
  return document.cookie.split("; ").reduce((acc, item) => {
    const [name, value] = item.split("=");
    acc[name] = value;
    return acc;
  }, {});
}

const getPromocodeMessage = (promocode) => {
  for (let obj of promocodeArr) {
    if (obj.promocode === promocode) {
      return obj.gift;
    }
  }

  return "";
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  let promocode = inputElement.value.toUpperCase();
  let message = getPromocodeMessage(promocode);

  if (message !== "") {
    if (formElement.nextElementSibling) {
      formElement.nextElementSibling.remove();
    }

    approvePromocode(message);

    document.cookie = `promocode=${promocode}`;
    document.cookie = `message=${message}`;
  } else {
    if (formElement.nextElementSibling) {
      formElement.nextElementSibling.remove();
    }

    inputElement.style.color = "black";
  }
};

const pageReload = () => {
  const cookie = getCookie();
  console.log(cookie);

  if (cookie.promocode !== undefined) {
    inputElement.value = cookie.promocode;

    approvePromocode(cookie.message);
  }
};

const approvePromocode = (message) => {
  containerElement.insertAdjacentHTML(
    "beforeend",
    `<p class="form-message">Промокод применен. ${message}</p>`
  );

  inputElement.style.color = "green";
};

pageReload();

formElement.addEventListener("submit", handleFormSubmit);
