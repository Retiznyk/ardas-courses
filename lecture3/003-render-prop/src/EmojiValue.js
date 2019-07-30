import React from "react";

function getEmoji(value) {
  switch (value) {
    case 1:
      return "🤮";
    case 2:
      return "😠";
    case 3:
      return "😐";
    case 4:
      return "🙂";
    case 5:
      return "😃";
    default:
      return "🤔";
  }
}

export default ({ value }) => {
  return <span style={{ fontSize: 56 }}>{getEmoji(value)}</span>;
};
