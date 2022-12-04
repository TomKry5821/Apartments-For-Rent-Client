/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState, useCallback } from "react";


const AnnouncementDetailsLogged = function () {
  const navigate = useNavigate();
  const [announcementDetails, setAnnouncementDetails] = useState();
  const [announcementId, setAnnouncementId] = useState(0);

  const getAnnouncementDetails = useCallback(() => {
    const URL = "http://localhost:8010";
    fetch(URL + "/announcement/api/v1/public/announcements/" + announcementId, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setAnnouncementDetails(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Coś poszło nie tak");
      });
  }, [announcementId]);

  useEffect(() => {
    if (announcementId) getAnnouncementDetails();
  }, [getAnnouncementDetails, announcementId]);

  useEffect(() => {
    const announcementId = localStorage.getItem("announcementId");
    setAnnouncementId(announcementId)
  }, [setAnnouncementId]);

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Button
          variant="contained"
          sx={{
            color: "rgb(17, 63, 103);",
            backgroundColor: "rgb(243, 249, 251);",
            fontFamily: "Titillium Web, sans-serif;",
          }}
          onClick={() => {
            navigate("/logged");
          }}
        >
          wstecz
        </Button>
      </Grid>
      <Grid item>
        <Grid container justifyContent="space-between">
          {
            !!announcementDetails && (

              <Grid item>
                <Carousel width="600px">
                  {
                    < div >
                      <img src={"data:image/png;base64," + announcementDetails.mainPhoto} />
                    </div>
                  }
                  {
                    announcementDetails.photos.map((photo) => (
                      <div>
                        <img src={"data:image/png;base64," + photo} />
                      </div>
                    ))
                  }
                </Carousel>
              </Grid>
            )}
          <Grid item>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Card sx={{ width: "600px" }}>
                  {!!announcementDetails && (
                    <CardHeader
                      title={announcementDetails.title}
                      subheader={announcementDetails.username}
                    />
                  )}
                  <CardContent>
                    <Grid container direction="column" spacing={3}>
                      {
                        !!announcementDetails && (
                          <Grid item>
                            <TableContainer component={Paper}>
                              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                <TableBody>
                                  <TableRow key="roomsNumber" >
                                    <TableCell scope="row">Data utworzenia </TableCell>
                                    <TableCell align="right">{announcementDetails.creationDate}</TableCell>
                                  </TableRow>
                                  <TableRow key="district">
                                    <TableCell scope="row">Województwo</TableCell>
                                    <TableCell align="right">{announcementDetails.district}</TableCell>
                                  </TableRow>
                                  <TableRow key="city">
                                    <TableCell scope="row">Miasto</TableCell>
                                    <TableCell align="right">{announcementDetails.city}</TableCell>
                                  </TableRow>
                                  <TableRow key="zipCode">
                                    <TableCell scope="row">Kod pocztowy</TableCell>
                                    <TableCell align="right">{announcementDetails.zipCode}</TableCell>
                                  </TableRow>
                                  <TableRow key="street">
                                    <TableCell scope="row">Ulica</TableCell>
                                    <TableCell align="right">{announcementDetails.street}</TableCell>
                                  </TableRow>
                                  <TableRow key="buildingNumber" >
                                    <TableCell scope="row">Numer budynku</TableCell>
                                    <TableCell align="right">{announcementDetails.buildingNumber}</TableCell>
                                  </TableRow>
                                  <TableRow key="localNumber">
                                    <TableCell scope="row">Numer lokalu</TableCell>
                                    <TableCell align="right">{announcementDetails.localNumber}</TableCell>
                                  </TableRow>
                                  <TableRow key="roomsNumber" >
                                    <TableCell scope="row">Ilość pokoi</TableCell>
                                    <TableCell align="right">{announcementDetails.roomsNumber}</TableCell>
                                  </TableRow>
                                  <TableRow key="rentalAmount">
                                    <TableCell scope="row">Opłata miesięczna</TableCell>
                                    <TableCell align="right">{announcementDetails.rentalAmount}zł</TableCell>
                                  </TableRow>
                                  <TableRow key="caution" >
                                    <TableCell scope="row">Wysokość kaucji</TableCell>
                                    <TableCell align="right">{announcementDetails.caution}</TableCell>
                                  </TableRow>
                                  <TableRow key="localNumber">
                                    <TableCell scope="row">Ilość pokoi</TableCell>
                                    <TableCell align="right">{announcementDetails.roomsNumber}</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grid>
                        )}
                      {!!announcementDetails && (
                        <Grid item>
                          {announcementDetails.content}.{" "}
                        </Grid>
                      )}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Paper>
                  <Grid container direction="row" justifyContent="space-around">
                    <Grid item>
                      <IconButton
                        aria-label="write a message"
                        onClick={() => {
                          alert(
                            "Aby wysłać wiadomość do innego użytkownika - zaloguj się :)"
                          );
                        }}
                      >
                        <MessageIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => {
                          alert(
                            "Aby dodać ofertę do ulubionych - zaloguj się :)"
                          );
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  );
};
export default AnnouncementDetailsLogged;
