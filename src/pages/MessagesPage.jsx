/* eslint-disable no-return-assign */
import React from "react";
import "../index.css";
import {
  Grid,
  Paper,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  Fab
} from "@mui/material";

// import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import NavbarLogged from "../coponents/logged/NavbarLogged";

const MessagesPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarLogged />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <Grid container>
            <Grid container component={Paper}>
              <Grid
                item
                xs={3}
                sx={{
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: "rgba(34, 101, 151, 0.1)",
                }}
              >
                <Divider />
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic-email"
                    label="Szukaj"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Divider />
                <List>
                  <ListItem button key="OlaMusiał">
                    <ListItemText primary="Ola Musiał">Ola Musiał</ListItemText>
                    <ListItemText secondary="online" align="right" />
                  </ListItem>
                  <ListItem button key="Alicja">
                    <ListItemText primary="Alicja">Alicja</ListItemText>
                  </ListItem>
                  <ListItem button key="JanKowalski">
                    <ListItemText primary="Jan Kowalski">
                      Jan Kowalski
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={9} className="messageArea">
                <List>
                  <ListItem
                    key="1"
                    sx={{ backgroundColor: "rgba(34, 101, 151,0.1)" }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText align="right" primary="Hejak! Co tam?" />
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText align="right" secondary="09:30" />
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem key="2">
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText
                          align="left"
                          primary="Siema! Super, a jak u Ciebie?"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText align="left" secondary="09:31" />
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem
                    key="3"
                    sx={{ backgroundColor: "rgba(34, 101, 151,0.1)" }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText
                          align="right"
                          primary="Spoko spoko, zgadajmy się kiedyś."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText align="right" secondary="10:30" />
                      </Grid>
                    </Grid>
                  </ListItem>
                </List>
                <Divider />
                <Grid
                  container
                  direction="row"
                  align="right"
                  spacing={3}
                  padding={1}
                >
                  <Grid item xs={10}>
                    <TextField
                      id="outlined-basic-email"
                      label="Napisz wiadomość"
                      fullWidth
                    />
                  </Grid>

                  <Grid item>
                    <Fab aria-label="add">
                      <AttachFileIcon />
                    </Fab>
                  </Grid>
                  <Grid item>
                    <Fab color="primary" aria-label="send">
                      <SendIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
