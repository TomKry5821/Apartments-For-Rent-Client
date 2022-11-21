/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { Card, CardHeader, CardContent, Grid, Paper } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import OfferDetails from "./OfferDetails";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kitchen from "../images/kitchen.jpeg";
import livingRoom from "../images/livingRoom.jpeg";
import bedroom from "../images/bedroom.jpeg";
import view from "../images/view.jpeg";
import garage from "../images/garage.jpeg";

const FullOfferLogged = function () {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Carousel width="600px">
          <div>
            <img src={kitchen} alt="" />
          </div>
          <div>
            <img src={bedroom} alt="" />
          </div>
          <div>
            <img src={livingRoom} alt="" />
          </div>
          <div>
            <img src={view} alt="" />
          </div>
          <div>
            <img src={garage} alt="" />
          </div>
        </Carousel>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Card sx={{ width: "600px" }}>
              <CardHeader
                title="Mieszkanie 3 pokojowe - centrum Gliwic"
                subheader="14 Wrzesień 2022"
              />
              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <OfferDetails />
                  </Grid>
                  <Grid item>
                    Sprzedam mieszkanie 3 pokojowe w spokojnej okolicy,
                    bezczynszowe. Miejsce garażowe. Teren ogrodzony z pięknym
                    widokiem. Blisko centrum. Mieszkanie bardzo jasne i czyste.
                    Dostępne od zaraz. Więcej informacji w wiadomości prywatnej.{" "}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Paper>
              <Grid container direction="row" justifyContent="space-around">
                <Grid item>
                  <IconButton aria-label="write a message">
                    <MessageIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => {
                      alert("Dodano do ulubionych :)");
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FullOfferLogged;
