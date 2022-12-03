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
  Input
} from "@mui/material";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
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
  const city = useRef("")
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
    data.append('content', document.getElementById("content").value);
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
                    <FormControl
                      size="lg">
                      <FormLabel>Tytuł ogłoszenia</FormLabel>
                      <Input
                        type='text'
                        inputRef={title} />
                      <br></br>
                      <FormLabel>Treść ogłoszenia</FormLabel>
                      <textarea
                        id="content"
                        type='text'
                        inputRef={content} />
                      <br></br>
                      <FormLabel>Ilość pokoi</FormLabel>
                      <Input
                        type='number'
                        inputRef={roomsNumber} />
                      <br></br>
                      <FormLabel>Od kiedy można wynająć</FormLabel>
                      <Input
                        type='date'
                        inputRef={rentalTerm} />
                      <br></br>
                      <FormLabel>Wysokość kaucji[zł]</FormLabel>
                      <Input
                        type='number'
                        inputRef={caution} />
                      <br></br>
                      <FormLabel>Miesięczna opłata[zł]</FormLabel>
                      <Input
                        type='number'
                        inputRef={rentalAmount} />
                      <br></br>
                      <FormLabel>Województwo</FormLabel>
                      <Input
                        type='test'
                        inputRef={district} />
                      <br></br>
                      <FormLabel>Miasto</FormLabel>
                      <Input
                        type='text'
                        inputRef={city} />
                      <br></br>
                      <FormLabel>Kod pocztowy</FormLabel>
                      <Input
                        type='text'
                        inputRef={zipCode} />
                      <br></br>
                      <FormLabel>Ulica</FormLabel>
                      <Input
                        type='text'
                        inputRef={street} />
                      <br></br>
                      <FormLabel>Numer budynku</FormLabel>
                      <Input
                        type='text'
                        inputRef={buildingNumber} />
                      <br></br>
                      <FormLabel>Numer lokalu</FormLabel>
                      <Input
                        type='text'
                        inputRef={localNumber} />
                      <br></br>
                      <Button
                        type="submit"
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
                        dodaj
                      </Button>
                    </FormControl>
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddOffer;
