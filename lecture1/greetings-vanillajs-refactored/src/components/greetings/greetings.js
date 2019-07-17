import createGreetingsLabel from "./greetingsLabel";
import createBackButton from "./greetingsBackButton";

export default ({ data = {}, onBack = () => {} } = {}) => {
  const container = document.createElement("div");

  const label = createGreetingsLabel(data);
  const button = createBackButton(onBack);

  container.appendChild(button);
  container.appendChild(label);

  return container;
};
