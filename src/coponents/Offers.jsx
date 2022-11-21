import * as React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import img1 from "../images/photo1.jpeg";
import img2 from "../images/photo2.jpeg";
import img3 from "../images/photo3.jpeg";
import OfferDetails from "./OfferDetails";

const Offers = function () {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      marginBottom={5}
      marginRight={5}
    >
      <Grid item>
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            title="Mieszkanie 3 pokojowe - centrum Gliwic"
            subheader="14 Wrzesień 2022"
          />
          <CardMedia component="img" height="194" image={img1} alt="photo1" />
          <CardContent>
            <OfferDetails />
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                alert("Aby dodać ofertę do ulubionych - zaloguj się :)");
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              aria-label="see more"
              onClick={() => {
                navigate("/offer");
              }}
            >
              <ArrowRightAltIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            title="Niezwykły apartament na uboczu Warszawy"
            subheader="1 Październik 2022"
          />
          <CardMedia component="img" height="194" image={img3} alt="photo2" />
          <CardContent>
            <OfferDetails />
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                alert("Aby dodać ofertę do ulubionych - zaloguj się:)");
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              aria-label="see more"
              onClick={() => {
                navigate("/offer");
              }}
            >
              <ArrowRightAltIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            title="Przestronna kawalerka na starówce w Łodzi"
            subheader="9 Sierpień 2022"
          />
          <CardMedia component="img" height="194" image={img2} alt="photo1" />
          <CardContent>
            <OfferDetails />
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                alert("Aby dodać ofertę do ulubionych - zaloguj się :)");
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              aria-label="see more"
              onClick={() => {
                navigate("/offer");
              }}
            >
              <ArrowRightAltIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Offers;
