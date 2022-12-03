/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { useState, useRef } from "react";

import {
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const EditUserDetails = function () {
  const userId = localStorage.getItem("userId");
  const authotizationToken = localStorage.getItem("authorizationToken");
  const name = localStorage.getItem("userName");
  const surname = localStorage.getItem("userSurname");
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");
  const newName = useRef("");
  const newSurname = useRef("");
  const newEmail = useRef("");
  const newPassword = useRef("");

  const changeUserDetails = function (name, surname, email, password) {
    const URL = "http://localhost:8010";
    const body = {
      "name": name,
      "surname": surname,
      "email": email,
      "isActive": true,
      "password": password
    };
    fetch(URL + "/user/api/v1/users/" + userId + "/details", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authotizationToken
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert("Pomyślnie zmieniono dane użytkownika o adresie e-mail - " + email);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Coś poszło nie tak, spróbuj jeszcze raz");
      });
  }

  return (
    <Card sx={{ width: "800px" }}>
      <CardContent>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={7}
              justifyContent="center"
            >
              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Imię
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Nazwisko
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  E-mail
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Hasło
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="column"
              spacing={4}
              justifyContent="center"
            >
              <Grid item>
                <TextField
                  inputRef={newName}
                  defaultValue={name}
                />
              </Grid>

              <Grid item>
                <TextField
                  defaultValue={surname}
                  inputRef={newSurname}
                />
              </Grid>
              <Grid item>
                <TextField
                  defaultValue={email}
                  inputRef={newEmail}
                />
              </Grid>
              <Grid item>
                <TextField
                  htmlFor="outlined-adornment-password"
                  defaultValue={password}
                  inputRef={newPassword}
                >
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Button
          onClick={() => {
            changeUserDetails(newName.current.value,
              newSurname.current.value,
              newEmail.current.value,
              newPassword.current.value);
          }}>
          Zmień dane
        </Button>
      </CardContent>
    </Card>
  );
};
export default EditUserDetails;
