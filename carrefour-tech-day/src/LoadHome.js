import React, { useState, useEffect } from 'react'
import Produto from './Produto';
import Carregando from './Carregando';
import { useParams } from 'react-router-dom'



const LoadHome = () =>  {
    const [carregando, setCarregando] = useState(true)
    const [lista, setLista] = useState([])
    const { id } = useParams()
     
    
    let url = "https://justcors.com/tl_26283e1/https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq="+id;
  
    const fetchLista = async () => {
      setCarregando(true)
      try {
        const response = await fetch(url)
        const lista = await response.json()
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
            return <Produto key={lista.productId} {...lista}  />;
          })}
   </div>

  
      </main>
    )
  }

  

  export default LoadHome;
