import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button
} from "@material-ui/core";
import { validate as validateEmail } from "email-validator";
import passwordValidator from "password-validator";
import {
  signInByEmail,
  signInByFacebook,
  signInByGoogle
} from "../services/api";

import "./Auth.css";

const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits() // Must have digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

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

  validateEmail = () =>
    validateEmail(this.state.email) ? null : "Email invalid";

  validatePassword = () =>
    passwordSchema.validate(this.state.password) ? null : "Password invalid";

  validateInputs = () => {
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();

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
      this.setState({ loadingByEmail: true });
      signInByEmail(credentials)
        .then(() => alert("logged in by email"))
        .finally(() => this.setState({ loadingByEmail: false }));
    }
  };

  handleSignInByFacebook = () => {
    this.setState({ loadingByFacebook: true });
    signInByFacebook()
      .then(() => alert("logged in by facebook"))
      .finally(() => this.setState({ loadingByFacebook: false }));
  };

  handleSignInByGoogle = () => {
    this.setState({ loadingByGoogle: true });
    signInByGoogle()
      .then(() => alert("logged in by google"))
      .finally(() => this.setState({ loadingByGoogle: false }));
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
      this.state.loadingByEmail ||
      this.state.loadingByFacebook ||
      this.state.loadingByGoogle
    );
  }

  render() {
    return (
      <div className="auth-container">
        <FormControl error={!!this.state.emailError}>
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <Input
            id="email-input"
            type="email"
            name="email"
            autoComplete="email"
            onChange={this.handleEmailChange}
            aria-describedby="email-helper-text"
          />
          <FormHelperText id="email-helper-text">
            {this.state.emailError}
          </FormHelperText>
        </FormControl>
        <FormControl error={!!this.state.passwordError}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password-input"
            type="password"
            autoComplete="current-password"
            onChange={this.handlePasswordChange}
            aria-describedby="password-helper-text"
          />
          <FormHelperText id="password-helper-text">
            {this.state.passwordError}
          </FormHelperText>
        </FormControl>
        <Button
          color="primary"
          className="auth-button"
          onClick={this.handleSignInByEmail}
          disabled={this.isLoading}
        >
          {this.state.loadingByEmail ? "Loading..." : "Submit"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={this.isLoading}
          onClick={this.handleSignInByFacebook}
        >
          {this.state.loadingByFacebook ? "Loading..." : "Facebook"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={this.isLoading}
          onClick={this.handleSignInByGoogle}
        >
          {this.state.loadingByGoogle ? "Loading..." : "Google"}
        </Button>
      </div>
    );
  }
}
