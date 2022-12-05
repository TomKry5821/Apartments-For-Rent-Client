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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Input
} from "@mui/material";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const EditUserAnnouncement = function () {
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const announcementId = localStorage.getItem("announcementId");
  const mainPhoto = localStorage.getItem("mainPhoto");
  const photos = JSON.parse(localStorage.getItem("photos"));
  const title = localStorage.getItem("title");
  const city = localStorage.getItem("city");
  const district = localStorage.getItem("district");
  const zipCode = localStorage.getItem("zipCode");
  const street = localStorage.getItem("street");
  const buildingNumber = localStorage.getItem("buildingNumber");
  const localNumber = localStorage.getItem("localNumber");
  const roomsNumber = localStorage.getItem("roomsNumber");
  const rentalAmount = localStorage.getItem("rentalAmount");
  const rentalTerm = localStorage.getItem("rentalTerm");
  const caution = localStorage.getItem("caution");
  const content = localStorage.getItem("content");

  const newMainPhoto = useState(null);
  const newPhotos = useState([]);
  const newTitle = useRef("");
  const newCity = useRef("");
  const newDistrict = useRef("");
  const newZipCode = useRef("");
  const newStreet = useRef("");
  const newBuildingNumber = useRef("");
  const newLocalNumber = useRef(0);
  const newRoomsNumber = useRef(0);
  const newRentalAmount = useRef(0);
  const newRentalTerm = useRef("");
  const newCaution = useRef(0);
  const newContent = useRef("");

  const changeAnnouncementDetails = function () {
    const URL = "http://localhost:8010";
    const userId = localStorage.getItem("userId");
    const authorizationToken = localStorage.getItem("authorizationToken");
    const data = new FormData();
    //for (const item of newPhotos) {
    // data.append('photos', item);
    //}
    data.append('title', newTitle.current.value);
    //data.append('mainPhoto', newMainPhoto);
    data.append('userId', userId);
    data.append('roomsNumber', newRoomsNumber.current.value);
    data.append('rentalTerm', newRentalTerm.current.value);
    data.append('caution', newCaution.current.value);
    data.append('rentalAmount', newRentalAmount.current.value);
    data.append('content', newContent.current.value);
    data.append('district', newDistrict.current.value);
    data.append('city', newCity.current.value);
    data.append('zipCode', newZipCode.current.value);
    data.append('street', newStreet.current.value);
    data.append('buildingNumber', newBuildingNumber.current.value);
    data.append('localNumber', newLocalNumber.current.value);
    fetch(URL + "/announcement/api/v1/announcements/" + announcementId, {
      method: "PUT",
      body: data,
      headers: {
        'Authorization': authorizationToken
      }
    }).then((response) => response.json())
      .then((data) => {
        if (data.status > 299) {
          alert("Coś poszło nie tak, sprawdź uzupełnione pola i spróbuj jeszcze raz");
        } else {
          alert("Pomyślnie zmieniono ogłoszenie");
          navigate("/logged/profile/announcement");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Coś poszło nie tak, sprawdź uzupełnione pola i spróbuj jeszcze raz");
      });
  }

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        {
          <Grid item>
            <Carousel width="600px">
              {
                < div >
                  <img src={"data:image/png;base64," + mainPhoto} />
                </div>
              }
              {
                photos.map((photo) => (
                  <div>
                    <img src={"data:image/png;base64," + photo} />
                  </div>
                ))
              }
            </Carousel>
          </Grid>
        }
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Card sx={{ width: "600px" }}>
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
                              defaultValue={title}
                              inputRef={newTitle}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="district">
                          <TableCell scope="row"> Województwo </TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={district}
                              inputRef={newDistrict}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="city">
                          <TableCell scope="row">Miasto</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={city}
                              inputRef={newCity} />
                          </TableCell>
                        </TableRow>
                        <TableRow key="zipCode">
                          <TableCell scope="row">Kod pocztowy</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={zipCode}
                              inputRef={newZipCode}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="street">
                          <TableCell scope="row">Ulica</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={street}
                              inputRef={newStreet}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="buildingNumber" >
                          <TableCell scope="row">Numer budynku</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={buildingNumber}
                              inputRef={newBuildingNumber}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="localNumber">
                          <TableCell scope="row">Numer lokalu</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={localNumber}
                              inputRef={newLocalNumber}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="roomsNumber" >
                          <TableCell scope="row">Ilość pokoi</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={roomsNumber}
                              inputRef={newRoomsNumber}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="rentalAmount">
                          <TableCell scope="row">Opłata miesięczna</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={rentalAmount} zł
                              inputRef={newRentalAmount}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="caution" >
                          <TableCell scope="row">Wysokość kaucji</TableCell>
                          <TableCell align="right">
                            <TextField
                              align="right"
                              defaultValue={caution} zł
                              inputRef={newCaution}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow key="rentalTerm">
                          <TableCell scope="row">Od kiedy można wynająć</TableCell>
                          <TableCell align="right">
                            <Input
                              type="date"
                              align="right"
                              defaultValue={rentalTerm}
                              inputRef={newRentalTerm}
                            />
                          </TableCell>
                        </TableRow>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={20}
                      fullWidth
                      defaultValue={content}
                      inputRef={newContent}
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
                changeAnnouncementDetails();
              }}
            >
              zapisz
            </Button>
          </Grid>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default EditUserAnnouncement;
