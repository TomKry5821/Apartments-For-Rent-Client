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
  Paper
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const AllAnnouncementsLogged = function () {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([]);

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
    navigate("/logged/offer");
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

  return (
    <Grid
      container
      spacing={5}
      direction="row"
      marginBottom={5}
      marginRight={5}
    >
      {
        announcements && announcements.map((announcement) => (

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
                    observeAnnouncement(announcement.id);
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
  );
};

export default AllAnnouncementsLogged;
