/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import React from "react";
import "../index.css";
import FullOfferLogged from "../coponents/FullOfferLogged";
import NavbarLogged from "../coponents/NavbarLogged";

const FullOfferLoggedPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarLogged />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <FullOfferLogged />
        </div>
      </div>
    </div>
  );
};

export default FullOfferLoggedPage;
