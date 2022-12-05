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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

const NavbarLogged = function () {
  const navigate = useNavigate();

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
          < Select
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            IconComponent={FavouriteIcon}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem >Ten</MenuItem>
            <MenuItem >Twenty</MenuItem>
            <MenuItem >Thirty</MenuItem>
          </Select >
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
                navigate("/logged/addOffer");
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
