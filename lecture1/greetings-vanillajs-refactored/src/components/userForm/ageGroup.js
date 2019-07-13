function createAgeInput() {
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "ageInput");
  input.setAttribute("placeholder", "Age");
  return input;
}

function createAgeLabel() {
  const label = document.createElement("label");
  label.setAttribute("for", "ageInput");
  label.innerText = "How old are you?";
  return label;
}

export default function createAgeGroup() {
  const group = document.createElement("div");
  group.setAttribute("class", "form-group");
  group.appendChild(createAgeLabel());
  group.appendChild(createAgeInput());
  return group;
}
