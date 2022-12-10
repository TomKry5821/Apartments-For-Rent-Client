/* eslint-disable no-return-assign */
import React from "react";
import "../index.css";
import NavbarLogged from "../coponents/logged/NavbarLogged";
import Messages from "../coponents/logged/Messages";

const MessagesPage = function () {
  return (
    <div className="main-container">
      <div className="navStrip">
        <div className="navText">
          <NavbarLogged />
        </div>
      </div>
      <div>
        <Messages />
      </div>
    </div>
  );
};

export default MessagesPage;
