/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const PersonalData = function () {
  return (
    <Card sx={{ width: "800px" }}>
      <CardContent>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={5}
              justifyContent="center"
            >
              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Imię
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Nazwisko
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  E-mail
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Hasło
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="column"
              spacing={5}
              justifyContent="center"
            >
              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Kasia
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  Kowalczewska
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  kasia.kowa123@gmail.com
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                  ******
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default PersonalData;
