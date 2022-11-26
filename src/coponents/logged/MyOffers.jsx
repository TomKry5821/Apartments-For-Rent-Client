import * as React from "react";
import { Button, Card, CardHeader, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/photo1.jpeg";
import img2 from "../../images/photo2.jpeg";
import img3 from "../../images/photo3.jpeg";

const MyOffers = function () {
  const navigate = useNavigate();

  return (
    <Grid container spacing={5} direction="row" marginBottom={5}>
      <Grid item>
        <Button
          onClick={() => {
            navigate("/logged/profile/offer");
          }}
        >
          <Card sx={{ maxWidth: 300 }}>
            <CardHeader title="Gliwice" subheader="14 Wrzesień 2022" />
            <CardMedia component="img" height="194" image={img1} alt="photo1" />
          </Card>
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => {
            navigate("/logged/profile/offer");
          }}
        >
          <Card sx={{ maxWidth: 300 }}>
            <CardHeader title="Warszawa" subheader="1 Październik 2022" />
            <CardMedia component="img" height="194" image={img3} alt="photo2" />
          </Card>
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => {
            navigate("/logged/profile/offer");
          }}
        >
          <Card sx={{ maxWidth: 300 }}>
            <CardHeader title="Łódź" subheader="9 Sierpień 2022" />
            <CardMedia component="img" height="194" image={img2} alt="photo1" />
          </Card>
        </Button>
      </Grid>
    </Grid>
  );
};

export default MyOffers;
