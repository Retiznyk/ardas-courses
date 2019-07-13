import "./app.css";
import createUserForm from "./components/userForm";

function onSubmit(data) {
  console.log("submit", data);
}

function init() {
  const app = document.getElementById("app");
  const userForm = createUserForm({ onSubmit });

  app.appendChild(userForm);
}

export default init;
