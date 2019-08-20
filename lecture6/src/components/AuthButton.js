import React from "react";
import { Button } from "@material-ui/core";

import auth from "../services/auth";

const AuthButton = ({ onAuth }) => (
  <Button
    onClick={() => auth.signIn().then(onAuth)}
    variant="contained"
    color="primary"
  >
    Auth
  </Button>
);

export default AuthButton;
