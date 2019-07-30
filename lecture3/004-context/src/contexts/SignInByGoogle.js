import createSignInContext from "./createSignInContext";
import { signInByGoogle } from "../services/api";

const GoogleContext = createSignInContext(signInByGoogle);

export default GoogleContext;
