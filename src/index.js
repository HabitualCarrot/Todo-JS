import createCard from "./Todo";
import { Form } from "./Form";
import { strikeThrough } from "./Todo";
import "./style.css";

const newTask = document.querySelector("#newTask");
newTask.addEventListener("click", Form);

// Form();
