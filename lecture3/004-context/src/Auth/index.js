import Auth from "./Auth";
import "./Auth.css";

import compose from "../services/compose";

import withSignInByEmail from "../hocs/withSignInByEmail";
import withSignInByFacebook from "../hocs/withSignInByFacebook";
import SignInByGoogle from "../contexts/SignInByGoogle";

export default compose(
  withSignInByEmail,
  withSignInByFacebook,
  SignInByGoogle.withSignInProvider,
  SignInByGoogle.withSignInConsumer("googleProvider")
)(Auth);
