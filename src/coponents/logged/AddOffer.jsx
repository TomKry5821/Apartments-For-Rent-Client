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
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from "@mui/material";
import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";


const AddOffer = function () {
  const navigate = useNavigate();

  const [mainPhoto, setMainPhoto] = useState();
  const [photos, setPhotos] = useState([]);
  const title = useRef("");
  const content = useRef("");
  const roomsNumber = useRef(0);
  const rentalTerm = useRef("");
  const caution = useRef(0);
  const rentalAmount = useRef(0);
  const district = useRef("");
  const city = useRef("");
  const zipCode = useRef("");
  const street = useRef("");
  const buildingNumber = useRef("");
  const localNumber = useRef("");

  const handleMainPhotoChange = (e) => {
    if (e.target.files) {
      setMainPhoto(e.target.files[0]);
    }
  };

  const handlePhotosChange = (e) => {
    if (e.target.files) {
      setPhotos(e.target.files);
    }
  };

  const addNewAnnouncement = function () {
    const URL = "http://localhost:8010";
    const userId = localStorage.getItem("userId");
    const authorizationToken = localStorage.getItem("authorizationToken");
    const data = new FormData();
    for (const item of photos) {
      data.append('photos', item);
    }
    data.append('userId', userId);
    data.append('title', title.current.value);
    data.append('mainPhoto', mainPhoto);
    data.append('roomsNumber', roomsNumber.current.value);
    data.append('rentalTerm', rentalTerm.current.value);
    data.append('caution', caution.current.value);
    data.append('rentalAmount', rentalAmount.current.value);
    data.append('content', content.current.value);
    data.append('district', district.current.value);
    data.append('city', city.current.value);
    data.append('zipCode', zipCode.current.value);
    data.append('street', street.current.value);
    data.append('buildingNumber', buildingNumber.current.value);
    data.append('localNumber', localNumber.current.value);
    fetch(URL + "/announcement/api/v1/announcements", {
      method: "POST",
      body: data,
      headers: {
        'Authorization': authorizationToken
      }
    }).then((response) => response.json())
      .then((data) => {
        if (data.status > 299) {
          alert("Coś poszło nie tak, sprawdź uzupełnione pola i spróbuj jeszcze raz");
        } else {
          alert("Pomyślnie dodano ogłoszenie");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Coś poszło nie tak, sprawdź uzupełnione pola i spróbuj jeszcze raz");
      });
  }


  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Card sx={{ width: "600px" }}>
              <CardHeader>
                <TextField defaultValue="">
                  Nowe ogłoszenie
                </TextField>
              </CardHeader>
              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 250 }} aria-label="simple table">
                        <TableRow key="title">
                          <TableCell scope="row"> Tytuł </TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={title}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="district">
                          <TableCell scope="row"> Województwo </TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={district}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="city">
                          <TableCell scope="row">Miasto</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={city} />
                          </TableCell>
                        </TableRow>
                        <TableRow key="zipCode">
                          <TableCell scope="row">Kod pocztowy</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={zipCode}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="street">
                          <TableCell scope="row">Ulica</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={street}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="buildingNumber" >
                          <TableCell scope="row">Numer budynku</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={buildingNumber}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="localNumber">
                          <TableCell scope="row">Numer lokalu</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={localNumber}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="roomsNumber" >
                          <TableCell scope="row">Ilość pokoi</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={roomsNumber}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="rentalAmount">
                          <TableCell scope="row">Opłata miesięczna[zł]</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={rentalAmount}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="caution" >
                          <TableCell scope="row">Wysokość kaucji[zł]</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              inputRef={caution}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="rentalTerm">
                          <TableCell scope="row">Od kiedy można wynająć</TableCell>
                          <TableCell align="right">
                            <Input
                              type="date"
                              align="right"
                              inputRef={rentalTerm}
                            />
                          </TableCell>
                        </TableRow>
                      </Table>
                    </TableContainer>
                    <Grid item>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={20}
                        fullWidth
                        inputRef={content}
                      />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" justifyContent="space-between">
                      <Grid item>
                        <div>
                          <h1>Główne zdjęcie</h1>
                          <br></br>
                        </div>
                        <div>
                          <input type="file" onChange={handleMainPhotoChange} />
                          <br></br>
                          <br></br>
                        </div>
                      </Grid>
                      <Grid item>
                        <div>
                          <h1>Dodatkowe zdjęcia</h1>
                          <br></br>
                        </div>
                        <div>
                          <input multiple type="file" onChange={handlePhotosChange} />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    color: "rgb(17, 63, 103);",
                    backgroundColor: "rgb(243, 249, 251);",
                    fontFamily: "Titillium Web, sans-serif;",
                  }}
                  onClick={() => {
                    addNewAnnouncement();
                  }}
                >
                  Dodaj ogłoszenie
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddOffer;