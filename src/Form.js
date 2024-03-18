import { createCard } from "./Todo";
import card from "./Todo";

export function Form() {
  // create modal container
  const modal = document.createElement("div");
  modal.id = "modal";

  //create form element
  const formEl = document.createElement("div");
  formEl.id = "form";

  // build out form
  const formHead = document.createElement("div");
  formHead.id = "formHead";
  formHead.innerHTML = `<button id='close'>X</button>`;

  const titleInput = document.createElement("input");
  titleInput.id = "formTitle";
  titleInput.setAttribute("placeholder", "Title");

  const description = document.createElement("input");
  description.id = "formDescription";
  description.setAttribute("placeholder", "Description");

  const submit = document.createElement("div");
  submit.innerHTML = `<button id='submit'>Submit</button>`;
  submit.id = "submit";

  // append
  document.body.appendChild(modal);
  modal.appendChild(formEl);
  formEl.appendChild(formHead);
  formEl.appendChild(submit);
  formEl.appendChild(titleInput);
  formEl.appendChild(description);

  submit.addEventListener("click", (e) => {
    const obj = new card(titleInput.value, description.value);
    createCard(obj);
    hideModal();
  });

  // remove modal if x button is clicked
  const closeButton = document.querySelector("#close");
  closeButton.addEventListener("click", hideModal);
  // remove modal if background is clicked
  modal.addEventListener("click", (e) => {
    if (e.target.id === "modal") {
      hideModal();
    }
  });
}

export function hideModal() {
  const modal = document.querySelector("#modal");

  modal.remove();
}
