/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { StyledButton } from "./Styles";
import { TextField } from "@mui/material";

const SignUp = (props) => {
  // --- States ---
  // --- Sign Up Data State ---
  const [signUpData, setSignUpData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    secret: "",
  });

  // --- Validation State ---
  const [validation, setValidation] = useState({
    username: false,
    first_name: false,
    last_name: false,
    email: false,
    secret: false,
  });

  // ------------------------------------------
  // --- Validation Functions ---

  // Validate Length
  const validLength = (value, minLength, maxLength) => {
    return value.length >= minLength && value.length <= maxLength;
  };

  // Validate Letters and Numbers for Username
  const usernameValidation = (value) => {
    return /^[a-zA-Z]+[0-9]+$/.test(value);
  };

  // Validate Letters for First and Last Name
  const lettersForNames = (value) => {
    return /^[a-zA-Z\s]+$/.test(value);
  };

  // Email Validation
  const emailValidation = (value) => {
    return /^[a-zA-Z][a-zA-Z0-9._-]+@[a-z]+\.(com)$/.test(value);
  };

  // Password Validation
  const passwordValidation = (value) => {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/.test(
      value
    );
  };

  // ------------------------------------------
  // --- Handlers & Functions ---

  const onSignUp = (e) => {
    e.preventDefault();
    setValidation({
      username: false,
      first_name: false,
      last_name: false,
      email: false,
      secret: false,
    });

    const { username, first_name, last_name, email, secret } = signUpData;

    const usernameValid =
      validLength(username, 5, 10) && usernameValidation(username);
    const firstValid =
      validLength(first_name, 3, 8) && lettersForNames(first_name);
    const lastValid =
      validLength(last_name, 3, 8) && lettersForNames(last_name);
    const emailValid = emailValidation(email);
    const secretValid =
      validLength(secret, 8, 20) && passwordValidation(secret);

    if (
      !usernameValid ||
      !firstValid ||
      !lastValid ||
      !emailValid ||
      !secretValid
    ) {
      setValidation({
        username: !usernameValid,
        first_name: !firstValid,
        last_name: !lastValid,
        email: !emailValid,
        secret: !secretValid,
      });
    } else {
      axios
        .post("http://localhost:3001/signup", {
          username,
          first_name,
          last_name,
          email,
          secret,
        })
        .then((user) => props.onAuth({ ...user.data, secret }))
        .catch((error) => console.log("API Sign Up Error: ", error));
    }
  };

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // ------------------------------------------

  return (
    <form onSubmit={onSignUp}>
      <TextField
        label="First Name"
        name="first_name"
        type="text"
        margin="dense"
        variant="standard"
        onChange={handleChange}
        error={validation.first_name}
        helperText={validation.first_name ? "At most 8 and letters only" : ""}
        fullWidth
      />
      <TextField
        label="Last Name"
        name="last_name"
        type="text"
        margin="dense"
        variant="standard"
        onChange={handleChange}
        error={validation.last_name}
        helperText={validation.last_name ? "At most 8 and letters only" : ""}
        fullWidth
      />
      <TextField
        label="User Name"
        name="username"
        type="text"
        margin="dense"
        variant="standard"
        onChange={handleChange}
        error={validation.username}
        helperText={
          validation.username ? "Should be 5~10 letters and numbers" : ""
        }
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        margin="dense"
        variant="standard"
        onChange={handleChange}
        error={validation.email}
        helperText={
          validation.email ? "Should be similar to: swift77@gmail.com" : ""
        }
        fullWidth
      />
      <TextField
        label="Password"
        name="secret"
        type="password"
        margin="dense"
        variant="standard"
        onChange={handleChange}
        error={validation.secret}
        helperText={
          validation.secret
            ? "Should be 8~20 letters, numbers, and symbols"
            : ""
        }
        fullWidth
      />
      <StyledButton variant="contained" color="primary" type="submit" fullWidth>
        sign up
      </StyledButton>
    </form>
  );
};

export default SignUp;
