/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import React from "react";
import "../index.css";
import AddAnnouncement from "../coponents/logged/AddAnnouncement";
import NavbarLogged from "../coponents/logged/NavbarLogged";

const AddAnnouncementPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarLogged />
        </div>
      </div>
      <div className="searchBG">
        <div className="searchBar">
          <AddAnnouncement />
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncementPage;
