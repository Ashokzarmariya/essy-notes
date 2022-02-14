import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Note from "./components/Notes/Note";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Readnote from "./components/Notes/Readnote";
import UpdateNote from "./components/Notes/UpdateNote";
import Navbar1 from "./components/Navbar/Navbar1";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Navbar1 />
        <Routes>
          <Route exact path="/notes" element={<Note />} />
          <Route exact path="/note/:id" element={<Readnote />} />
          <Route exact path="/update/:id" element={<UpdateNote />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
