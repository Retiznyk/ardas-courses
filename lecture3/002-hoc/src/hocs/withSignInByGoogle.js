import withSignIn from "./withSignIn";
import { signInByGoogle } from "../services/api";

export default withSignIn("googleProvider", signInByGoogle);
