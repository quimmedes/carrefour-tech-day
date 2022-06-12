import React, { useState, useEffect } from 'react'
import Carregando from './Carregando';
import axios from 'axios';


const LoadLoja = () =>  {
    const [carregando, setCarregando] = useState(true)
    const [lista, setLista] = useState([])
  
    let url = "https://justcors.com/tl_26283e1/https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=14801788";


    const fetchLista = async () => {
      setCarregando(true)
      try {
        const response = await axios.get(url, {
            "Content-Type": "application/xml; charset=utf-8"})
        const lista = await response.data
        setCarregando(false)
        setLista(lista)
      } catch (error) {
        setCarregando(false)
        console.log(error)
        
      }
    }
  
    useEffect(() => {
      fetchLista()
    }, [])
    if (carregando) {
      return (
        <main>
          <Carregando />
        </main>
      )
    }
    if (lista.length === 0) {
      return (
        <main>
          <div className='Auto'>
            <h2>Sem itens disponíveis</h2>
            <button className='btn' onClick={() => fetchLista()}>
              
              Atualizar
            </button>
          </div>
        </main>
      )
    }

    return (
      <main>
        <div className='Lista'>
    {lista.map((lista) => {
            return <Seller key={lista.id} {...lista}  />;
          })}
   </div>

  
      </main>
    )
  }

  var Seller = (id, logo, name)=>{
    return(
        <div>Id : {id}, logo: {logo}, nome: {name}</div>
    );
  }

  

  export default LoadLoja;
