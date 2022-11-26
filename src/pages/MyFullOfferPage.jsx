/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import React from "react";
import "../index.css";
import MyFullOffer from "../coponents/logged/MyFullOffer";
import NavbarLogged from "../coponents/logged/NavbarLogged";

const MyFullOfferPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarLogged />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <MyFullOffer />
        </div>
      </div>
    </div>
  );
};

export default MyFullOfferPage;
