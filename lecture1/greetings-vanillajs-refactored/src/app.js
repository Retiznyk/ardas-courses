import "./app.css";
import createUserForm from "./components/userForm";
import createGreetings from "./components/greetings";

function init() {
  const app = document.getElementById("app");
  const userForm = createUserForm({ onSubmit });

  function onSubmit(data) {
    const greetings = createGreetings({ data, onBack });

    function onBack() {
      app.replaceChild(userForm, greetings);
    }

    app.replaceChild(greetings, userForm);
  }

  app.appendChild(userForm);
}

export default init;
