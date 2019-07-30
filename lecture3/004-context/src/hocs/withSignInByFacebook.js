import withSignIn from "./withSignIn";
import { signInByFacebook } from "../services/api";

export default withSignIn("facebookProvider", signInByFacebook);
