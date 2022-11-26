/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import AddOfferDetails from "./AddOfferDetails";

const AddOffer = function () {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Grid container direction="column" justifyContent="space-between">
          <Grid item>
            <Carousel width="600px" />
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
                navigate("/logged/addOffer");
              }}
            >
              dodaj zdjęcie
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Card sx={{ width: "600px" }}>
              <CardHeader>
                <TextField defaultValue="" />
              </CardHeader>

              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <AddOfferDetails />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={20}
                      fullWidth
                      defaultValue=""
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
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
                navigate("/logged/profile/offer");
              }}
            >
              dodaj
            </Button>
          </Grid>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddOffer;
