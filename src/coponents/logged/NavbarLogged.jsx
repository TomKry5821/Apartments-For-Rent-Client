/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import { Button, Grid, IconButton } from "@mui/material";
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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
      navigate("/");
    })
      .catch((error) => {
        console.error('Error:', error);
        alert("Something went wrong, try again");
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
        <Tooltip title="Mój profil">
          <IconButton size="large">
            <PersonIcon
              fontSize="large"
              onClick={() => {
                navigate("/logged/profile");
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Wiadomości">
          <IconButton size="large">
            <MessageIcon
              fontSize="large"
              onClick={() => {
                navigate("/logged/messages");
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Dodaj ogłoszenie">
          <IconButton size="large">
            <AddBusinessIcon
              fontSize="large"
              onClick={() => {
                navigate("/logged/addOffer");
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Ulubione">
          <IconButton size="large">
            <FavouriteIcon fontSize="large" onClick={handleClick}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </FavouriteIcon>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText primary="Starred" />
              </List>
            </Collapse>
          </IconButton>
        </Tooltip>

        <Tooltip title="Wyloguj">
          <IconButton
            size="large"
            onClick={() => {
              logout();
            }}
          >
            <ExitToAppIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default NavbarLogged;
