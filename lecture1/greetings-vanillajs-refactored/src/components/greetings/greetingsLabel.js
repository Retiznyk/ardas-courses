import { daysToDate } from "../../services/date";

function getCorrectUserName(name) {
  return name || "Anonymous";
}

function getTextByBirthday(name, date) {
  if (!date) {
    return `Hello, ${name}!`;
  }

  const days = daysToDate(date);
  return days !== 0
    ? `Hello, ${name}! It's ${days} days left until your birthday`
    : `Happy Birthday, ${name}!`;
}

export default data => {
  const { name, birthday } = data;
  const userName = getCorrectUserName(name);
  const label = getTextByBirthday(userName, birthday);
  const container = document.createElement("span");

  container.innerText = label;

  return container;
};
