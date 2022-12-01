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
import { useRef } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

import { useState } from 'react';


const NavbarRegister = function () {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const name = useRef("");
  const surname = useRef("");
  const email = useRef("");
  const password = useRef("");

  const registerNewUser = function (name, surname, email, password) {
    const URL = "http://localhost:8010";
    const body = {
      "name": name,
      "surname": surname,
      "email": email,
      "isActive": true,
      "password": password
    }
    fetch(URL + "/user/api/v1/public/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ''
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        localStorage.setItem("userId", data.id);
        localStorage.setItem("authorizationToken", data.accessToken);
        setError(false);
        navigate("/logged");
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(true);
        alert("Something went wrong, try again");
      });
  }

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
