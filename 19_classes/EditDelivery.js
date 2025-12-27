import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
  constructor(customer, address, distance, status = "delivery") {
    super(customer, address, distance);
    this._status = status;

    this._renderEditButton();
    this._updateUI();
  }

  get status() {
    return this._status;
  }

  set status(newStatus) {
    const statuses = ["delivery", "delivered", "cancelled"];

    if (statuses.includes(newStatus)) {
      this._status = newStatus;
      this._updateUI();
    }
  }

  _updateUI() {
    super._updateUI();

    const element = this.cardElement;

    element.dataset.status = this._status;
  }

  _renderEditButton() {
    const element = this.cardElement;

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.textContent = "Изменить";

    editButton.addEventListener("click", () => this._showEditForm());
    element.append(editButton);
  }

  _showEditForm() {
    const element = this.cardElement;

    if (document.querySelector(".edit-form")) {
      return;
    }

    const editFormOverlay = document.createElement("div");
    editFormOverlay.classList.add("edit-form");

    editFormOverlay.insertAdjacentHTML(
      "beforeend",
      `
        <div class="edit-form-content">
            <button class="close-button">&times;</button>
            <h1 class="edit-form-header">Изменить</h1>
            <form>
                <input type="text" class="edit-name" value="${
                  this.customer
                }" placeholder="Имя"/>
                <input type="text" class="edit-address" value="${
                  this.address
                }" placeholder="Адрес"/>
                <input type="number" class="edit-distance" value="${
                  this.distance
                }" placeholder="Расстояние"/>
                <select class="edit-status">
                    <option value="delivery" ${
                      this._status == "delivery" ? "selected" : ""
                    }>
                        Доставляется
                    </option>
                    <option value="delivered" ${
                      this._status == "delivered" ? "selected" : ""
                    }>
                        Доставлен
                    </option>
                    <option value="cancelled" ${
                      this._status == "cancelled" ? "selected" : ""
                    }>
                        Отменен
                    </option>
                </select>
                <button type="submit" class="save-button">Сохранить</button>
            </form>
        </div>
    `
    );

    editFormOverlay
      .querySelector(".close-button")
      .addEventListener("click", () => {
        editFormOverlay.remove();
      });

    editFormOverlay.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      this.customer = editFormOverlay.querySelector(".edit-name").value;
      this.address = editFormOverlay.querySelector(".edit-address").value;
      this.distance = editFormOverlay.querySelector(".edit-distance").value;
      this.status = editFormOverlay.querySelector(".edit-status").value;

      editFormOverlay.remove();
    });

    document.body.append(editFormOverlay);
  }

  static getTotalDistance(deliveryArr) {
    return deliveryArr
      .filter((delivery) => delivery.status !== "cancelled")
      .reduce((sum, delivery) => sum + Number(delivery.distance), 0);
  }
}
