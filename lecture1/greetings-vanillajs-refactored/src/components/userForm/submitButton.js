export default function createSubmitButton(submitCb) {
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn btn-primary");
  button.innerText = "Submit";
  button.addEventListener("click", submitCb);
  return button;
}
