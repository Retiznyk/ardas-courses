import { daysToDate } from "../../services/date";

export default ({ name, birthday } = {}) => {
  const userName = name || "User";
  const days = daysToDate(birthday);
  const birthdayText = birthday
    ? days > 0
      ? `It's ${days} days left until your birthday`
      : "Happy Birthday!"
    : "";

  const container = document.createElement("div");
  container.innerText = `Hello ${userName}! ${birthdayText}`;
  return container;
};
