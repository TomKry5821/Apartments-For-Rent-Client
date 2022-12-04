import * as React from "react";
import { Button, Card, CardHeader, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const UserAnnouncements = function () {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([]);
  const [userId, setUserId] = useState(0);

  const getAnnouncements = useCallback(() => {
    const URL = "http://localhost:8010";
    fetch(URL + "/announcement/api/v1/public/announcements?userId=" + userId, {
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
  }, [userId]);

  useEffect(() => {
    if (userId) getAnnouncements();
  }, [getAnnouncements, userId]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, [setUserId]);

  const navigateToAnnouncementDetails = function (announcementId) {
    localStorage.setItem("announcementId", announcementId);
    navigate("/logged/profile/offer");
  }

  return (
    <Grid container spacing={5} direction="row" marginBottom={5}>
      {!!announcements && (
        announcements.map((announcement) => (
          <Grid item>
            <Button
              onClick={() => {
                navigateToAnnouncementDetails(announcement.id);
              }}
            >
              <Card sx={{ maxWidth: 300 }}>
                <CardHeader title={announcement.announcementDetailsDTO.title}
                  subheader={"Data utworzenia - " + announcement.creationDate} />
                <CardMedia component="img"
                  height="194"
                  image={"data:image/png;base64," + announcement.announcementDetailsDTO.mainPhoto} />
              </Card>
            </Button>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default UserAnnouncements;
