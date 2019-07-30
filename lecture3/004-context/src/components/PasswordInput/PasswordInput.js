import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText
} from "@material-ui/core";

const PasswordInput = ({ error, ...props }) => (
  <FormControl error={!!error}>
    <InputLabel htmlFor="password">Password</InputLabel>
    <Input
      id="password-input"
      type="password"
      autoComplete="current-password"
      aria-describedby="password-helper-text"
      {...props}
    />
    <FormHelperText id="password-helper-text">{error}</FormHelperText>
  </FormControl>
);

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default PasswordInput;
