/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import { Button, Grid, IconButton, Select, MenuItem } from "@mui/material";
import React from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import FavouriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Tooltip from "@mui/material/Tooltip";
import { useState, useEffect, useCallback } from 'react';

const NavbarLogged = function () {
  const navigate = useNavigate();
  const [observedAnnouncements, setObservedAnnouncements] = useState([]);

  const logout = function () {
    const URL = "http://localhost:8010";
    const userId = localStorage.getItem("userId");
    const authorizationToken = localStorage.getItem("authorizationToken");
    fetch(URL + "/user/api/v1/auth/" + userId + "/logout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }
    }).then((data) => {
      console.log('Success:', data);
      alert("Wylogowano pomyślnie");
      navigate("/");
    })
      .catch((error) => {
        console.error('Error:', error);
        alert("Coś poszło nie tak, spróbuj jeszcze raz");
      });
  }

  const getObservedAnnouncements = useCallback(() => {
    const URL = "http://localhost:8010";
    const userId = localStorage.getItem("userId");
    const authorizationToken = localStorage.getItem("authorizationToken");
    fetch(URL + "/announcement/api/v1/announcements/observed/" + userId, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setObservedAnnouncements(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Nie udało się załadować obserwowanych ogłoszeń");
      });
  }, []);

  const unobserveAnnouncement = function (announcementId) {
    const URL = "http://localhost:8010";
    const userId = localStorage.getItem("userId");
    const authorizationToken = localStorage.getItem("authorizationToken");
    fetch(URL + "/announcement/api/v1/announcements/" + announcementId + "/unobserve/" + userId, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }
    }).then((data) => {
      alert("Pomyślnie odobserwowano ogłoszenie")
    })
      .catch((error) => {
        console.error('Error:', error);
        alert("Nie udało się odobserwować ogłoszenia");
      });
  }

  useEffect(() => {
    getObservedAnnouncements();
  }, [getObservedAnnouncements]);

  useEffect(() => {
    console.log("Pobieranie obserwowanych ogłoszeń");
  }, []);

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
            navigate("/logged");
          }}
        >
          SUPER MIESZKANIA
        </Button>{" "}
      </Grid>
      <Grid item spacing={30}>
        <Tooltip>
          {
            < Select
              sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
              IconComponent={FavouriteIcon}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              {
                !!observedAnnouncements && observedAnnouncements.map((observedAnnouncement) => (
                  <MenuItem >
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                    >
                      <Grid item>
                        < div >
                          <img

                            height={70}
                            width={100}
                            src={"data:image/png;base64," + observedAnnouncement.mainPhoto}
                          />
                        </div>
                      </Grid>
                      <Grid item>
                        <h4>{observedAnnouncement.title}</h4>
                        {observedAnnouncement.username}
                        <Grid item>
                          <Tooltip title="Odobserwuj ogłoszenie">
                            <IconButton
                              aria-label="add to favorites"
                              onClick={() => {
                                unobserveAnnouncement(observedAnnouncement.announcementId);
                              }}
                            >
                              <FavouriteIcon />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))
              }
            </Select >
          }
        </Tooltip>

        <Tooltip title="Mój profil">
          <IconButton size="medium">
            <PersonIcon
              fontSize="medium"
              onClick={() => {
                navigate("/logged/profile");
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Wiadomości">
          <IconButton size="medium">
            <MessageIcon
              fontSize="medium"
              onClick={() => {
                navigate("/logged/messages");
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Dodaj ogłoszenie">
          <IconButton size="medium">
            <AddBusinessIcon
              fontSize="medium"
              onClick={() => {
                navigate("/logged/addAnnouncement");
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Wyloguj">
          <IconButton
            size="medium"
            onClick={() => {
              logout();
            }}
          >
            <ExitToAppIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default NavbarLogged;
