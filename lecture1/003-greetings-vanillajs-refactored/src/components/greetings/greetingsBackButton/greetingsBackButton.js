import "./greetingsBackButton.css";

export default onPress => {
  const button = document.createElement("span");
  button.setAttribute("class", "back-button");
  button.addEventListener("click", onPress);
  button.innerText = "←";
  return button;
};
