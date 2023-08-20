/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { StyledButton } from "./Styles";
import { TextField } from "@mui/material";

const SignIn = (props) => {
  // --- States ---
  // --- Sign In Data State ---
  const [signInData, setSignInData] = useState({
    username: "",
    secret: "",
  });

  // --- Validation State ---
  const [validation, setValidation] = useState({
    username: false,
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

  // Password Validation
  const passwordValidation = (value) => {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/.test(
      value
    );
  };

  // ------------------------------------------
  // --- Handlers & Functions ---

  const onLogin = (e) => {
    e.preventDefault();
    setValidation({
      username: false,
      secret: false,
    });

    const { username, secret } = signInData;

    const usernameValid =
      validLength(username, 5, 10) && usernameValidation(username);
    const secretValid =
      validLength(secret, 8, 20) && passwordValidation(secret);

    if (!usernameValid || !secretValid) {
      setValidation({
        username: !usernameValid,
        secret: !secretValid,
      });
    } else {
      axios
        .post("http://localhost:3001/login", { username, secret })
        .then((user) => props.onAuth({ ...user.data, secret }))
        .catch((error) => console.log("API Sign In Error:", error));
    }
  };

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  // ------------------------------------------

  return (
    <form onSubmit={onLogin}>
      <TextField
        label="User Name"
        name="username"
        type="text"
        margin="normal"
        variant="standard"
        onChange={handleChange}
        error={validation.username}
        helperText={validation.username ? "Username is not correct" : ""}
        fullWidth
      />
      <TextField
        label="Password"
        name="secret"
        type="password"
        margin="normal"
        variant="standard"
        onChange={handleChange}
        error={validation.secret}
        helperText={validation.secret ? "Password is not correct" : ""}
        fullWidth
      />
      <StyledButton variant="contained" color="primary" type="submit" fullWidth>
        log in
      </StyledButton>
    </form>
  );
};

export default SignIn;
