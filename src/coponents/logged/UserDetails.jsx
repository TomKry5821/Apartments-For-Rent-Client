/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import axios from 'axios';

const UserDetails = function () {
  const [userDetails, setUserDetails] = useState(null);
  const [userId, setUserId] = useState(0);

  const getUserDetails = useCallback(() => {
    axios.get(`http://localhost:8010/user/api/v1/users/${userId}/details`,
      {
        withCredentials: true,
        headers: {
          'Authorization': localStorage.getItem("authorizationToken"),
          'Content-Type': 'application/json'
        }
      }).then(
        (response) => {
          setUserDetails(response.data);
          localStorage.setItem("userName", response.data.name);
          localStorage.setItem("userSurname", response.data.surname);
          localStorage.setItem("userEmail", response.data.email);
          localStorage.setItem("userPassword", response.data.password);
          console.log(response);
        }
      );
  }, [userId]);

  useEffect(() => {
    if (userId) getUserDetails();
  }, [getUserDetails, userId]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, [setUserId]);

  return (
    <Card sx={{ width: "800px" }}>
      <CardContent>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={5}
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
              spacing={5}
              justifyContent="center"
            >
              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  {!!userDetails && (
                    <strong>{userDetails.name} </strong>
                  )}
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  {!!userDetails && (
                    <strong>{userDetails.surname} </strong>
                  )}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  {!!userDetails && (
                    <strong>{userDetails.email} </strong>
                  )}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  {!!userDetails && (
                    <strong>{userDetails.password} </strong>
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default UserDetails;