import { validate } from "email-validator";
import withInputValidator from "../../hocs/withInputValidator";

function validateEmail(value) {
  return validate(value) ? null : "Email invalid";
}

export default withInputValidator(validateEmail);
