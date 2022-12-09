import * as React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, useRef } from "react";

const AllAnnouncementsLogged = function () {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([]);
  const [districtFilter, setDistrictFilter] = useState("");
  const districtRef = useRef("");

  const [cityFilter, setCityFilter] = useState("");
  const cityRef = useRef("");

  const [minRoomsNumberFilter, setMinRoomsNumberFilter] = useState("0");
  const minRoomsNumberRef = useRef("0");

  const [maxRoomsNumberFilter, setMaxRoomsNumberFilter] = useState("100");
  const maxRoomsNumberRef = useRef("100");

  const [minRentalAmountFilter, setMinRentalAmountFilter] = useState("0");
  const minRentalAmountRef = useRef("0");

  const [maxRentalAmountFilter, setMaxRentalAmountFilter] = useState("100000");
  const maxRentalAmountRef = useRef("100000");

  const getAnnouncements = useCallback(() => {
    const URL = "http://localhost:8010";
    fetch(URL + "/announcement/api/v1/public/announcements", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setAnnouncements([...data]);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Coś poszło nie tak");
      });
  }, []);

  useEffect(() => {
    getAnnouncements();
  }, [getAnnouncements]);

  useEffect(() => {
    console.log(announcements);
  }, []);

  const navigateToAnnouncementDetails = function (announcementId) {
    localStorage.setItem("announcementId", announcementId);
    navigate("/logged/announcement");
  }

  const observeAnnouncement = function (announcementId) {
    const URL = "http://localhost:8010";
    const userId = localStorage.getItem("userId");
    const authorizationToken = localStorage.getItem("authorizationToken");
    fetch(URL + "/announcement/api/v1/announcements/" + announcementId + "/observe/" + userId, {
      method: "POST",
      body: {},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }
    }).then((data) => {
      console.log('Success:', data);
      alert("Pomyślnie zaobserowano ogłoszenie");
    })
      .catch((error) => {
        console.error('Error:', error);
        alert("Nie udało się zaobserwować ogłoszenia");
      });
  }

  const setFilter = function () {
    setDistrictFilter(districtRef.current.value);
    setCityFilter(cityRef.current.value);

    minRoomsNumberRef.current.value != "" ? setMinRoomsNumberFilter(minRoomsNumberRef.current.value) : setMinRoomsNumberFilter("0");
    maxRoomsNumberRef.current.value != "" ? setMaxRoomsNumberFilter(maxRoomsNumberRef.current.value) : setMaxRoomsNumberFilter("100");

    minRentalAmountRef.current.value != "" ? setMinRentalAmountFilter(minRentalAmountRef.current.value) : setMinRentalAmountFilter("0");
    maxRentalAmountRef.current.value != "" ? setMaxRentalAmountFilter(maxRentalAmountRef.current.value) : setMaxRentalAmountFilter("100000");
  }

  useEffect(() => {
    console.log("Filtering data");
  }, [districtFilter, cityFilter, minRoomsNumberFilter, maxRoomsNumberFilter, minRentalAmountFilter, maxRentalAmountFilter])


  return (

    <div>
      <Grid item>
        <Grid container spacing={0} direction="column">
          <Grid item alignSelf="center">
            <Grid width={270} textAlign="center">
              <Grid item>województwo</Grid>
              <Grid item>
                <TextField
                  inputRef={districtRef}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item alignSelf="center">
            <Grid width={270} textAlign="center">
              <Grid item>miasto</Grid>
              <Grid item>
                <TextField
                  inputRef={cityRef}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item alignSelf="center">
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
                              inputRef={minRoomsNumberRef}
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
                            inputRef={maxRoomsNumberRef}
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
                  <Grid item>opłata miesięczna</Grid>
                  <Grid container spacing={2} direction="row">
                    <Grid item>
                      <Grid item>
                        <Grid direction="column" spacing={2} width={125}>
                          <Grid item>od</Grid>
                          <Grid item>
                            <TextField
                              inputRef={minRentalAmountRef}
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
                            inputRef={maxRentalAmountRef}
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
              <Grid item alignSelf="center">
                <Button
                  variant="contained"
                  sx={{
                    color: "rgb(243, 249, 251);",
                    backgroundColor: "rgb(17, 63, 103);",
                    fontFamily: "Titillium Web, sans-serif;",
                    width: "150px",
                  }}
                  onClick={() => {
                    setFilter();
                  }}
                >
                  FILTRUJ
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br></br>
      <Grid
        container
        spacing={5}
        direction="row"
        marginBottom={5}
        marginRight={5}
      >
        {
          announcements && announcements
            .filter(announcement => announcement.district.includes(districtFilter))
            .filter(announcement => announcement.city.includes(cityFilter))
            .filter(announcement => announcement.announcementDetailsDTO.roomsNumber >= parseInt(minRoomsNumberFilter))
            .filter(announcement => announcement.announcementDetailsDTO.roomsNumber <= parseInt(maxRoomsNumberFilter))
            .filter(announcement => announcement.announcementDetailsDTO.rentalAmount >= parseInt(minRentalAmountFilter))
            .filter(announcement => announcement.announcementDetailsDTO.rentalAmount <= parseInt(maxRentalAmountFilter))
            .map((announcement) => (

              <Grid item>
                <Card sx={{ maxWidth: 300 }}>
                  <CardHeader
                    title={announcement.announcementDetailsDTO.title}
                    subheader={announcement.username}
                  />
                  <CardMedia component="img"
                    height="194"
                    src={"data:image/png;base64," + announcement.announcementDetailsDTO.mainPhoto}
                  />
                  <CardContent>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 250 }} aria-label="simple table">
                        <TableBody>
                          <TableRow key="district">
                            <TableCell scope="row">Województwo</TableCell>
                            <TableCell align="right">{announcement.district}</TableCell>
                          </TableRow>
                          <TableRow key="city">
                            <TableCell scope="row">Miasto</TableCell>
                            <TableCell align="right">{announcement.city}</TableCell>
                          </TableRow>
                          <TableRow key="roomsNumber" >
                            <TableCell scope="row">Ilość pokoi</TableCell>
                            <TableCell align="right">{announcement.announcementDetailsDTO.roomsNumber}</TableCell>
                          </TableRow>
                          <TableRow key="rentalAmount">
                            <TableCell scope="row">Opłata miesięczna</TableCell>
                            <TableCell align="right">{announcement.announcementDetailsDTO.rentalAmount}zł</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
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
                        navigateToAnnouncementDetails(announcement.id)
                      }}
                    >
                      <ArrowRightAltIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))
        }
      </Grid>
    </div>
  );
};

export default AllAnnouncementsLogged;
