import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadHome from './LoadHome';
import ProdutoDetalhes from './ProdutoDetalhes';
import NavBar from './NavBar';
import LoadLoja from './LoadLoja'



function App() {
  
  return (



<Router>
<NavBar />    

    <Routes>
    <Route path="/" element={<LoadLoja />} />

      <Route path="/loja/:id" element={<LoadHome />} />
      <Route path="/produtodetalhes/:id" element={<ProdutoDetalhes />} />
      <Route path="/loadloja" element={<LoadLoja />} />
      <Route path="/?pesquisar=:id" element={<LoadLoja />} />


    </Routes>

  </Router>




   
  );
}





export default App;
