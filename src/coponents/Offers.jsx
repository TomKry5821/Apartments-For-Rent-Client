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
import OfferDetailsOnMain from "./OfferDetailsOnMain";
import { useEffect, useState, useCallback } from "react";


const Offers = function () {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState();
  const [loading, setLoading] = useState(true);

  const getAnnouncements = function () {
    const URL = "http://localhost:8010";
    fetch(URL + "/announcement/api/v1/public/announcements", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setAnnouncements[data];
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Coś poszło nie tak");
      });
  }

  useEffect(() => {
    setLoading(true);
    getAnnouncements();
    setLoading(false);
    aler
  }, []);

  if (loading) return <p>Loading...</p>
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
            <OfferDetailsOnMain />
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
