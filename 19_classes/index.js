import Delivery from "./Delivery.js";
import EditDelivery from "./EditDelivery.js";

const deliveryArr = [
  new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11),
];

const deliveryCardsContainer = document.querySelector(".delivery-cards");

const renderContent = (deliveryArr) => {
  deliveryArr.forEach((delivery) => {
    const deliveryCard = delivery.cardElement;

    deliveryCardsContainer.append(deliveryCard);
  });
};

renderContent(deliveryArr);
