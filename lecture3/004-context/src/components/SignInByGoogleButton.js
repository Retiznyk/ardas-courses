import React from "react";
import { Button } from "@material-ui/core";
import SignInByGoogle from "../contexts/SignInByGoogle";

export default props => (
  <SignInByGoogle.Context.Consumer>
    {({ loading, signIn }) => (
      <Button variant="contained" color="secondary" onClick={signIn} {...props}>
        {loading ? "Loading..." : "Google"}
      </Button>
    )}
  </SignInByGoogle.Context.Consumer>
);
