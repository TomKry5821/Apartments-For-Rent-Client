/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { Card, CardHeader, CardContent, Grid, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import OfferDetails from "../OfferDetails";
import kitchen from "../../images/kitchen.jpeg";
import livingRoom from "../../images/livingRoom.jpeg";
import bedroom from "../../images/bedroom.jpeg";
import garage from "../../images/garage.jpeg";
import view from "../../images/view.jpeg";

const MyFullOffer = function () {
  const navigate = useNavigate();

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
            <Grid container direction="row" justifyContent="space-around">
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    color: "rgb(17, 63, 103);",
                    backgroundColor: "rgb(243, 249, 251);",
                    fontFamily: "Titillium Web, sans-serif;",
                  }}
                  onClick={() => {
                    navigate("/logged/profile/offer/edit");
                  }}
                >
                  edytuj
                </Button>
              </Grid>

              <Grid item>
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
                  mój profil
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MyFullOffer;
