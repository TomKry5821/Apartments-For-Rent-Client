/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import React from "react";
import "../index.css";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyOffers from "../coponents/logged/MyOffers";
import NavbarLogged from "../coponents/logged/NavbarLogged";
import PersonalData from "../coponents/logged/PersonalData";

const MyProfilePage = function () {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarLogged />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <Grid
            container
            direction="column"
            spacing={5}
            alignContent="center"
            alignItems="center"
          >
            <Grid item>
              <Grid container direction="row" spacing={3}>
                <Grid item>
                  <PersonalData />
                </Grid>
                <Grid item alignSelf="center">
                  <Button
                    variant="contained"
                    sx={{
                      color: "rgb(17, 63, 103);",
                      backgroundColor: "rgb(243, 249, 251);",
                      fontFamily: "Titillium Web, sans-serif;",
                    }}
                    onClick={() => {
                      navigate("/logged/profile/edit");
                    }}
                  >
                    edytuj
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <h2>Moje oferty</h2>
            </Grid>
            <Grid item>
              <MyOffers />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
