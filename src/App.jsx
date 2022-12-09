/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import MainPage from "./pages/MainPage";
import MyProfilePage from "./pages/MyProfilePage";
import EditUserDetailsPage from "./pages/EditUserDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import LoggedMainPage from "./pages/LoggedMainPage";
import AnnouncementDetailsPage from "./pages/AnnouncementDetailsPage";
import AddAnnouncementPage from "./pages/AddAnnouncementPage";
import UserAnnouncementdetailsPage from "./pages/UserAnnouncementDetailsPage";
import EditMyAnnouncementPage from "./pages/EditMyAnnouncementPage";
import AnnouncementDetailsLoggedPage from "./pages/AnnouncementDetailsLoggedPage";
import MessagesPage from "./pages/MessagesPage";

export const UserContext = React.createContext({});
const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/announcement" element={<AnnouncementDetailsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logged" element={<LoggedMainPage />} />
        <Route path="/logged/announcement" element={<AnnouncementDetailsLoggedPage />} />
        <Route path="/logged/profile" element={<MyProfilePage />} />
        <Route path="/logged/profile/edit" element={<EditUserDetailsPage />} />
        <Route path="/logged/profile/announcement" element={<UserAnnouncementdetailsPage />} />
        <Route path="/logged/addAnnouncement" element={<AddAnnouncementPage />} />
        <Route path="/logged/messages" element={<MessagesPage />} />
        <Route
          path="/logged/profile/announcement/edit"
          element={<EditMyAnnouncementPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
