/* @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300&display=swap'); */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import {
  Button,
  Grid,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React from "react";
import { useContext } from 'react'
import { useRef } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const NavbarRegister = function () {

  const { registerNewUser, error } = useContext(UserContext)

  const navigate = useNavigate();
  const name = useRef("");
  const surname = useRef("");
  const email = useRef("");
  const password = useRef("");

  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item>
        {" "}
        <Button
          variant="text"
          sx={{
            color: "rgb(243, 249, 251);",
            fontFamily: "Titillium Web, sans-serif;",
            fontSize: "20px",
          }}
          onClick={() => {
            navigate("/")
          }}
        >
          SUPER MIESZKANIA
        </Button>
      </Grid>
      <Grid item>
        <Container>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <TextField
                clolr="primary"
                id="name"
                label="imię"
                variant="standard"
                inputRef={name}
              />
            </Grid>
            <Grid item>
              <TextField
                id="surname"
                label="nazwisko"
                variant="standard"
                inputRef={surname} />
            </Grid>
            <Grid item>
              <TextField
                id="mail"
                label="e-mail"
                variant="standard"
                inputRef={email} />
            </Grid>
            <Grid item>
              <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  hasło
                </InputLabel>
                <Input
                  type="password"
                  id="haslo"
                  label="haslo"
                  inputRef={password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item alignSelf="flex-end">
              <Button
                variant="contained"
                sx={{
                  color: "rgb(17, 63, 103);",
                  backgroundColor: "rgb(243, 249, 251);",
                  fontFamily: "Titillium Web, sans-serif;",
                }}
                onClick={() => {
                  registerNewUser(
                    name.current.value,
                    surname.current.value,
                    email.current.value,
                    password.current.value
                  );
                  if (error != null) {
                    alert(error);
                  } else {
                    navigate("/logged");
                  }
                }}
              >
                zarejestruj się
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default NavbarRegister;
