/* eslint-disable no-shadow */
import { React } from "react";
import { Grid } from "@mui/material";
import Filter from "../coponents/Filter";
import AllAnnouncementsLogged from "../coponents/logged/AllAnnouncementsLogged";
import NavbarLogged from "../coponents/logged/NavbarLogged";

const LoggedMainPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarLogged />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <Filter />
            </Grid>
            <Grid item alignContent="baseline">
              <AllAnnouncementsLogged />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LoggedMainPage;
