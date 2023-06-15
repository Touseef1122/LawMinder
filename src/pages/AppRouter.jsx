import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login">
<<<<<<< HEAD
          <Login/>
=======
          <Login />
>>>>>>> 2de1a074909228c9ce0aed6b5bc3eea5194b4dec
        </Route>
     
      </Routes>
    </Router>
  );
};

export default AppRouter;
