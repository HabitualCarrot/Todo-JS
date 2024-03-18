export default class card {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

export function createCard(obj) {
  const content = document.querySelector("#content");

  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  const titleEl = document.createElement("h1");
  titleEl.textContent = obj.title;

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = obj.description;

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  content.appendChild(cardEl);
  cardEl.appendChild(titleEl);
  cardEl.appendChild(descriptionEl);
  cardEl.appendChild(checkbox);
}
