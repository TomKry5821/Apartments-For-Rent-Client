/* eslint-disable no-shadow */
import { React } from "react";
import { Grid } from "@mui/material";
import Filter from "../coponents/Filter";
import AllAnnouncements from "../coponents/AllAnnouncements";
import NavbarRegister from "../coponents/NavbarRegister";

const RegisterPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarRegister />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <Filter />
            </Grid>
            <Grid item alignContent="baseline">
              <AllAnnouncements />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
