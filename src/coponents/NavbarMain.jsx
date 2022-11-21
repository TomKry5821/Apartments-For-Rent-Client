/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import { Button, Grid } from "@mui/material";
import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = function () {
  const navigate = useNavigate();
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
            navigate("/");
          }}
        >
          SUPER MIESZKANIA
        </Button>{" "}
      </Grid>
      <Grid item alignSelf="flex-end">
        <Grid container spacing={1} direction="row">
          <Grid item>
            <Button
              variant="contained"
              sx={{
                color: "rgb(17, 63, 103);",
                backgroundColor: "rgb(243, 249, 251);",
                fontFamily: "Titillium Web, sans-serif;",
              }}
              icon={<LoginIcon />}
              onClick={() => {
                navigate("/login");
              }}
            >
              ZALOGUJ SIĘ
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                color: "rgb(17, 63, 103);",
                backgroundColor: "rgb(243, 249, 251);",
                fontFamily: "Titillium Web, sans-serif;",
              }}
              icon={<LoginIcon />}
              onClick={() => {
                navigate("/register");
              }}
            >
              ZARESJESTRUJ SIĘ
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
