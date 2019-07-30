import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText
} from "@material-ui/core";

const EmailInput = ({ error, ...props }) => (
  <FormControl error={!!error}>
    <InputLabel htmlFor="email-input">Email</InputLabel>
    <Input
      id="email-input"
      type="email"
      name="email"
      autoComplete="email"
      aria-describedby="email-helper-text"
      {...props}
    />
    <FormHelperText id="email-helper-text">{error}</FormHelperText>
  </FormControl>
);

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default EmailInput;
