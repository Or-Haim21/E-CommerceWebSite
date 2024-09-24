import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default AuthRoutes;
