const bodyElement = document.querySelector("body");

const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "./img/discount.svg",
  },
  {
    title: "Скидка 10% на всё!",
    icon: "./img/discount_2.svg",
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "./img/gift.svg",
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "./img/delivery.svg",
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "./img/discount_3.svg",
  },
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const showCard = () => {
  let randomGift = getRandomInt(0, giftArr.length - 1);

  bodyElement.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <div class="card-image">
        <img src="${giftArr[randomGift].icon}" alt="" />
      </div>
      <div class="card-info">
        <p class="card-text">${giftArr[randomGift].title}</p>
        <button class="card-button">Отлично!</button>
      </div>
    </div>`
  );
};

const handleCardButtonClick = () => {
  document.querySelector(".card").remove();
};

setTimeout(() => {
  showCard();

  const cardButton = document.querySelector(".card-button");
  cardButton.addEventListener("click", handleCardButtonClick);
}, 3000);
