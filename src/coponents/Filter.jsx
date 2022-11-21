/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import { TextField, Grid, InputAdornment, Button } from "@mui/material";
import React from "react";
import "../index.css";

import Autocomplete from "@mui/material/Autocomplete";

const Filter = function () {
  const voivodeships = [
    { label: "Cała Polska" },
    { label: "Dolnośląskie" },
    { label: "Kujawsko-pomorskie" },
    { label: "Lubelskie" },
    { label: "Lubuskie" },
    { label: "Łódzkie" },
    { label: "Małopolskie" },
    { label: "Mazowieckie" },
    { label: "Opolskie" },
    { label: "Podkarpackie" },
    { label: "Podlaskie" },
    { label: "Pomorskie" },
    { label: "Śląskie" },
    { label: "Świętokrzyskie" },
    { label: "Warmińsko-mazurskie" },
    { label: "Wielkopolskie" },
    { label: "Zachodniopomorskie" },
  ];

  const cities = [
    { label: "Wszystkie miasta" },
    { label: "Wrocław" },
    { label: "Bydgoszcz" },
    { label: "Lublin" },
    { label: "Gorzów Wielkopolski" },
    { label: "Łódź" },
    { label: "kraków" },
    { label: "Warszawa" },
    { label: "Opole" },
    { label: "Rzeszów" },
    { label: "Białystok" },
    { label: "Gdańsk" },
    { label: "Katowice" },
    { label: "Kielce" },
    { label: "Olsztyn" },
    { label: "Poznań" },
    { label: "Szczecin" },
  ];
  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <Grid width={270} textAlign="center">
          <Grid item>województwo</Grid>
          <Grid item>
            <Autocomplete
              disablePortal
              id="voivodeships"
              options={voivodeships}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid width={270} textAlign="center">
          <Grid item>miasto</Grid>
          <Grid item>
            <Autocomplete
              disablePortal
              id="cities"
              options={cities}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Grid direction="column" spacing={2} width={270} textAlign="center">
              <Grid item>liczba pokoi</Grid>
              <Grid container spacing={2} direction="row">
                <Grid item>
                  <Grid item>
                    <Grid direction="column" spacing={2} width={125}>
                      <Grid item>od</Grid>
                      <Grid item>
                        <TextField
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid direction="column" width={125}>
                    <Grid item>do</Grid>
                    <Grid item>
                      <TextField
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid direction="column" spacing={2} width={270} textAlign="center">
              <Grid item>cena</Grid>
              <Grid container spacing={2} direction="row">
                <Grid item>
                  <Grid item>
                    <Grid direction="column" spacing={2} width={125}>
                      <Grid item>od</Grid>
                      <Grid item>
                        <TextField
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                zł
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid direction="column" width={125}>
                    <Grid item>do</Grid>
                    <Grid item>
                      <TextField
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">zł</InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                color: "rgb(243, 249, 251);",
                backgroundColor: "rgb(17, 63, 103);",
                fontFamily: "Titillium Web, sans-serif;",
                width: "150px",
              }}
            >
              FILTRUJ
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Filter;
