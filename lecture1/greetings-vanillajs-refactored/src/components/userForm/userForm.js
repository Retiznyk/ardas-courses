import { getDataFromForm } from "../../services/formUtils";
import createNameGroup from "./nameGroup";
import createBirthdayGroup from "./birthdayGroup";
import createSubmitButton from "./submitButton";

function createUserForm({ onSubmit = () => {} } = {}) {
  const form = document.createElement("form");

  const _onSubmit = e => {
    e.preventDefault();
    onSubmit(getDataFromForm(form));
  };

  form.setAttribute("class", "user-form");
  form.appendChild(createNameGroup());
  form.appendChild(createBirthdayGroup());
  form.appendChild(createSubmitButton(_onSubmit));
  return form;
}

export default createUserForm;
