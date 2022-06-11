import React, { useState, useEffect } from 'react'
import Produto from './Produto';


export default function LoadHome() {
    const [carregando, setCarregando] = useState(true)
    const [lista, setLista] = useState([])
  
    let url = "https://justcors.com/tl_124fa38/https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=carrefourbr739";
  
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
          <div className='title'>
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
  
          <div>
  
          {lista.map((lista) => {
            return <Produto key={lista.productId} {...lista}  />;
          })}
  
  
          </div>
  
      </main>
    )
  }

  const Carregando = () => {
    return (
      <div className="carregando">
        <h1>Carregando...</h1>
      </div>
    );
  };