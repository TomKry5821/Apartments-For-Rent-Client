/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import MainPage from "./pages/MainPage";
import MyProfilePage from "./pages/MyProfilePage";
import EditMyProfilePage from "./pages/EditMyProfilePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import LoggedMainPage from "./pages/LoggedMainPage";
import FullOfferPage from "./pages/FullOfferPage";
import AddOfferPage from "./pages/AddOfferPage";
import MyFullOfferPage from "./pages/MyFullOfferPage";
import EditMyOfferPage from "./pages/EditMyOfferPage";
import FullOfferLoggedPage from "./pages/FullOfferLoggedPage";

export const UserContext = React.createContext({});
const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/offer" element={<FullOfferPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logged" element={<LoggedMainPage />} />
        <Route path="/logged/offer" element={<FullOfferLoggedPage />} />
        <Route path="/logged/profile" element={<MyProfilePage />} />
        <Route path="/logged/profile/edit" element={<EditMyProfilePage />} />
        <Route path="/logged/profile/offer" element={<MyFullOfferPage />} />
        <Route path="/logged/addOffer" element={<AddOfferPage />} />
        <Route
          path="/logged/profile/offer/edit"
          element={<EditMyOfferPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
