import EditDelivery from "./EditDelivery.js";

const deliveryArr = [
  new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11),
];

const deliveryCardsContainer = document.querySelector(".delivery-cards");
const calcButton = document.querySelector(".calc-button");
const resultContainer = document.querySelector(".calc-result");

const renderContent = (deliveryArr) => {
  deliveryCardsContainer.innerHTML = "";

  deliveryArr.forEach((delivery) => {
    const deliveryCard = delivery.cardElement;

    deliveryCardsContainer.append(deliveryCard);
  });
};

calcButton.addEventListener("click", () => {
  const totalResult = EditDelivery.getTotalDistance(deliveryArr);
  resultContainer.textContent = `Общее расстояние: ${totalResult} км`;
});

renderContent(deliveryArr);
