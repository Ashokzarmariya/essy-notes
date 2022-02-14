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
          <Route  path="/notes" exact element={<Note />} />
          <Route  path="/note/:id" exact element={<Readnote />} />
          <Route  path="/update/:id" exact element={<UpdateNote />} />
          <Route  path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
