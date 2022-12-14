/* eslint-disable no-shadow */
import { React } from "react";
import { Grid } from "@mui/material";
import Filter from "../coponents/Filter";
import Offers from "../coponents/AllAnnouncements";
import NavbarLogin from "../coponents/NavbarLogin";

const LoginPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarLogin />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <Filter />
            </Grid>
            <Grid item alignContent="baseline">
              <Offers />
              <Offers />
              <Offers />
              <Offers />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
