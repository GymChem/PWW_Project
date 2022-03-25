import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import PlaceholderPage from "./PlaceHolderPage";

const Routing = (props) => {
  return (
    <Routes>
      <Route
        exact
        path="/home"
        element={
          <HomePage
            desktopView={props.desktopView}
            halfDesktopView={props.halfDesktopView}
            mobileView={props.mobileView}
          />
        }
      />
      <Route exact path="/placeholder" element={<PlaceholderPage />} />
      <Route path="*" element={<Navigate path="*" to="/home" />} />
    </Routes>
  );
};

export default Routing;
