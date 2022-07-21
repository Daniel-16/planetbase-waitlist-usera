import React from "react";
import Waitlists from "./components/Waitlist";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Routes/Routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Navbar />
              <Waitlists />
              <About />
            </>
          }
        />
        <Route path="/admins" exact element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
