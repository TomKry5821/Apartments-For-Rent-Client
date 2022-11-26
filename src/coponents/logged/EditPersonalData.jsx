/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { useState } from "react";

import {
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const EditPersonalData = function () {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <Card sx={{ width: "800px" }}>
      <CardContent>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={7}
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
              spacing={4}
              justifyContent="center"
            >
              <Grid item>
                <TextField defaultValue="Kasia" />
              </Grid>

              <Grid item>
                <TextField defaultValue="Kowalczewska" />
              </Grid>
              <Grid item>
                <TextField defaultValue="kasia.kowa123@gmail.com" />
              </Grid>
              <Grid item>
                <TextField
                  htmlFor="outlined-adornment-password"
                  defaultValue="haslo123."
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default EditPersonalData;
