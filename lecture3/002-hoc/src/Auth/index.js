import Auth from "./Auth";
import "./Auth.css";

import compose from "../services/compose";

import withSignInByEmail from "../hocs/withSignInByEmail";
import withSignInByFacebook from "../hocs/withSignInByFacebook";
import withSignInByGoogle from "../hocs/withSignInByGoogle";

export default compose(
  withSignInByEmail,
  withSignInByFacebook,
  withSignInByGoogle
)(Auth);
