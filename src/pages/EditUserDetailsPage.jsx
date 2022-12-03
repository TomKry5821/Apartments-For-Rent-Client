/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import React from "react";
import "../index.css";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserAnnouncements from "../coponents/logged/UserAnnouncements";
import NavbarLogged from "../coponents/logged/NavbarLogged";
import EditUserDetails from "../coponents/logged/EditUserDetails";

const EditMyProfilePage = function () {
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
                  <EditUserDetails />
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
                      navigate("/logged/profile");
                    }}
                  >
                    zapisz
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <h2>Moje oferty</h2>
            </Grid>
            <Grid item>
              <UserAnnouncements />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default EditMyProfilePage;
