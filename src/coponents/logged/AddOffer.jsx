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
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import AddOfferDetails from "./AddOfferDetails";
import { useState } from "react";

const AddOffer = function () {
  const navigate = useNavigate();

  const [file, setFile] = useState();
  const [filePath, setFilePath] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setFilePath(e.target.files[0].webkitRelativePath)
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }
  }

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Grid container direction="column" justifyContent="space-between">
          <Grid item>
            <Carousel width="600px" />
          </Grid>
          <Grid item>
            <div>
              <Input type="file" onChange={handleFileChange} />

              <div>{file && `${file.webkitRelativePath}`}</div>
              <div>
                <img src={filePath} height="200" width="200" />
              </div>

              <Button
                variant="contained"
                sx={{
                  color: "rgb(17, 63, 103);",
                  backgroundColor: "rgb(243, 249, 251);",
                  fontFamily: "Titillium Web, sans-serif;",
                }}
                onClick={() => {
                  handleUploadClick();
                }}
              >
                dodaj zdjęcie
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Card sx={{ width: "600px" }}>
              <CardHeader>
                <TextField defaultValue="" />
              </CardHeader>

              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <AddOfferDetails />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={20}
                      fullWidth
                      defaultValue=""
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
                navigate("/logged/profile/offer");
              }}
            >
              dodaj
            </Button>
          </Grid>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddOffer;
