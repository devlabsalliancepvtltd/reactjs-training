import React from "react";

import { Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Login from "./auth/Login";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index={true} element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
