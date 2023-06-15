import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login">
          <Login/>
        </Route>
     
      </Routes>
    </Router>
  );
};

export default AppRouter;
