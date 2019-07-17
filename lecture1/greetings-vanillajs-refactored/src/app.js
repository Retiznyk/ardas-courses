import "./app.css";
import createUserForm from "./components/userForm";
import createGreetings from "./components/greetings";

export default function init(container) {
  const userForm = createUserForm({ onSubmit });

  function onSubmit(data) {
    const greetings = createGreetings({ data, onBack });

    function onBack() {
      container.replaceChild(userForm, greetings);
    }

    container.replaceChild(greetings, userForm);
  }

  container.appendChild(userForm);
}
