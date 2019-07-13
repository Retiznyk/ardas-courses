function createNameInput() {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "nameInput");
  input.setAttribute("placeholder", "Name");
  return input;
}

function createNameLabel() {
  const label = document.createElement("label");
  label.setAttribute("for", "nameInput");
  label.innerText = "What is your name?";
  return label;
}

export default function createNameGroup() {
  const group = document.createElement("div");
  group.setAttribute("class", "form-group");
  group.appendChild(createNameLabel());
  group.appendChild(createNameInput());
  return group;
}
