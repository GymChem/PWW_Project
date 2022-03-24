import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import PlaceholderPage from "./PlaceHolderPage";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/placeholder" element={<PlaceholderPage />} />
      <Route path="*" element={<Navigate path="*" to="/home" />} />
    </Routes>
  );
};

export default Routing;
