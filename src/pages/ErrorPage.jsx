/* eslint-disable func-names */
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = function () {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="error">Coś poszło nie tak, wróć do strony głównej. </h3>
      <Button onClick={navigate("/")} />
    </div>
  );
};

export default ErrorPage;
