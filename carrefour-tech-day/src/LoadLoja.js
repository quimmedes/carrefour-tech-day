import React, { useState, useEffect } from 'react'
import Carregando from './Carregando';
import axios from 'axios';
import placeholder from './img/placeholder.png'



const LoadLoja = () =>  {
    const [carregando, setCarregando] = useState(true)
    const [lista, setLista] = useState([])
    const [mapa, setMapa] = useState([])


  
    let url = "https://justcors.com/tl_26283e1/https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=14801788";


    const fetchLista = async () => {
      setCarregando(true)
      try {
        const response = await axios.get(url, {
            "Content-Type": "application/xml; charset=utf-8"})
        const lista = await response.data
        setCarregando(false)
        setLista(lista)
        load()

      } catch (error) {
        setCarregando(false)
        console.log(error)
        
      }
    }


    const load = ()=> {
      var mp = []

      for(var i = 0; i < lista.length; i++){
        var li = lista[i].sellers;

       for(var l = 0; l < li.length; l++){
        mp.push(lista[i].sellers[l])
      //  console.log(lista[i].sellers[l].name)
    }


    }

    setMapa(mp)
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


    if (mapa.length === 0) {
      load()
    }


  
    

    
    return(
        <div className='Lista'>
  

         
        
{

mapa.map(function(nome, i) { 
  return <div> <Seller key={i} {...nome}/> </div> 
})}
      

            </div>
    ) 

    
  }

  const Seller = (id)=>{
    return(
      <div className='Container' style={{height:'245px', padding:'0'}}>
        <div className='Bloco'><img className="Bloco" src={placeholder} alt="" /></div>
        <div className='Flex-bottom' style={{paddingTop:'10px', paddingLeft:'15px'}} > {id.name} </div>
        </div>
    )
  }

  
  export default LoadLoja;
