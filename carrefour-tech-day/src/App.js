import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadHome from './LoadHome';


function App() {
  
  return (
  <Router>
    <Routes>
      
      <Route path="/" element={<LoadHome />} />
      <Route path="*" element={<LoadHome />} />

    </Routes>

  </Router>

   
  );
}





export default App;
