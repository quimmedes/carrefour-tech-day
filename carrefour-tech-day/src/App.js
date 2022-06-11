import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadHome from './LoadHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import ProdutoDetalhes from './ProdutoDetalhes';



function App() {
  
  return (

    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} >
    

<Router>
    <Routes>
      
      <Route path="/" element={<LoadHome />} />
      <Route path="/produtodetalhes" element={<ProdutoDetalhes />} />
      <Route path="*" element={<LoadHome />} />


    </Routes>

  </Router>

</ThemeProvider>




   
  );
}





export default App;
