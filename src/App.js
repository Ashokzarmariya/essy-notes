import './App.css';
import React from "react";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Note from './components/Notes/Note';
//import { Switch, Route } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  
  return (
    // <div>
    //   ashok
    // </div>
    
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/note" element={<Note/>}/>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
      

      
      
    
  );
}

export default App;
