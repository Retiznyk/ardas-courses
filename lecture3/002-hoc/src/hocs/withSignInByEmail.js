import withSignIn from "./withSignIn";
import { signInByEmail } from "../services/api";

export default withSignIn("emailProvider", signInByEmail);
