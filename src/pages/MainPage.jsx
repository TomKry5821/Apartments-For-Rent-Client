/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import React from "react";
import "../index.css";
import { Grid } from "@mui/material";
import Filter from "../coponents/Filter";
import AllAnnouncements from "../coponents/AllAnnouncements";
import NavbarMain from "../coponents/NavbarMain";

const MainPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarMain />
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

export default MainPage;
