import React, { createRef } from "react";
import { Button } from "@material-ui/core";

import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";

import "./Auth.css";

export default class Auth extends React.Component {
  state = {
    email: "",
    emailError: null,
    password: "",
    passwordError: null,
    loadingByEmail: false,
    loadingByGoogle: false,
    loadingByFacebook: false
  };

  emailInput = createRef();
  passwordInput = createRef();

  validateInputs = () => {
    const emailError = this.emailInput.current.validate();
    const passwordError = this.passwordInput.current.validate();

    const errors = {
      emailError,
      passwordError
    };

    return errors;
  };

  handleSignInByEmail = () => {
    const { email, password } = this.state;
    const errors = this.validateInputs();

    this.setState(errors);

    const hasErrors = Object.values(errors).filter(Boolean).length;

    if (!hasErrors) {
      const credentials = { email, password };
      this.props.emailProvider.signIn(credentials).then(this.onSuccess);
    }
  };

  onSuccess = () => alert("logged in");

  handleSignInByFacebook = () => {
    this.props.facebookProvider.signIn().then(this.onSuccess);
  };

  handleSignInByGoogle = () => {
    this.props.googleProvider.signIn().then(this.onSuccess);
  };

  handlePasswordChange = e => {
    const password = e.target.value;
    this.setState({ password });
  };

  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  get isLoading() {
    return (
      this.props.emailProvider.loading ||
      this.props.facebookProvider.loading ||
      this.props.googleProvider.loading
    );
  }

  render() {
    return (
      <div className="auth-container">
        <EmailInput
          error={this.state.emailError}
          value={this.state.email}
          onChange={this.handleEmailChange}
          ref={this.emailInput}
        />
        <PasswordInput
          error={this.state.passwordError}
          value={this.state.password}
          onChange={this.handlePasswordChange}
          ref={this.passwordInput}
        />
        <Button
          color="primary"
          className="auth-button"
          onClick={this.handleSignInByEmail}
          disabled={this.isLoading}
        >
          {this.props.emailProvider.loading ? "Loading..." : "Submit"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={this.isLoading}
          onClick={this.handleSignInByFacebook}
        >
          {this.props.facebookProvider.loading ? "Loading..." : "Facebook"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={this.isLoading}
          onClick={this.handleSignInByGoogle}
        >
          {this.props.googleProvider.loading ? "Loading..." : "Google"}
        </Button>
      </div>
    );
  }
}
