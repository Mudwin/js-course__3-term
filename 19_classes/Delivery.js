export default class Delivery {
  constructor(customer, address, distance) {
    this._customer = customer;
    this._address = address;
    this._distance = distance;
    this._element = this._createElement();
  }

  get customer() {
    return this._customer;
  }

  set customer(name) {
    this._customer = name;
    this._updateUI();
  }

  get address() {
    return this._address;
  }

  set address(newAddress) {
    this._address = newAddress;
    this._updateUI();
  }

  get distance() {
    return this._distance;
  }

  set distance(newDistance) {
    this._distance = newDistance;
    this._updateUI();
  }

  _createElement() {
    const deliveryCard = document.createElement("div");
    deliveryCard.classList.add("delivery-card");

    deliveryCard.insertAdjacentHTML(
      "beforeend",
      `
        <div class="category">
            <div class="category-header">Имя</div>
            <div class="category-content customer"></div>
        </div>
        <div class="category">
            <div class="category-header">Адрес</div>
            <div class="category-content address"></div>
        </div>
        <div class="category">
            <div class="category-header">Расстояние</div>
            <div class="category-content distance"></div>
        </div>
        `
    );

    return deliveryCard;
  }

  _updateUI() {
    if (!this._element) {
      return;
    }

    this._element.querySelector(".customer").textContent = this._customer;
    this._element.querySelector(".address").textContent = this._address;
    this._element.querySelector(
      ".distance"
    ).textContent = `${this._distance} км`;
  }

  get cardElement() {
    return this._element;
  }
}
