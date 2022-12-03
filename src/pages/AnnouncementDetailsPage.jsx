/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import React from "react";
import "../index.css";
import AnnouncementDetails from "../coponents/AnnouncementDetails";
import NavbarMain from "../coponents/NavbarMain";

const FullOfferPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarMain />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <AnnouncementDetails />
        </div>
      </div>
    </div>
  );
};

export default FullOfferPage;
