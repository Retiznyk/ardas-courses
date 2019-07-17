function createBirthdayInput() {
  const input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "birthday");
  input.setAttribute("placeholder", "Birthday");

  return input;
}

function createBirthdayLabel() {
  const label = document.createElement("label");
  label.setAttribute("for", "birthday");
  label.innerText = "Enter your birthday";
  return label;
}

export default function createAgeGroup() {
  const group = document.createElement("div");
  group.setAttribute("class", "form-group");
  group.appendChild(createBirthdayLabel());
  group.appendChild(createBirthdayInput());
  return group;
}
