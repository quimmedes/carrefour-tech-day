import React, { useState, useEffect } from 'react'
import Produto from './Produto';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carregando from './Carregando';


const LoadHome = () =>  {
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

<Container fluid>
<Row xs={1} md={4} className="g-4">
  
    
    {lista.map((lista) => {
            return <Produto key={lista.productId} {...lista}  />;
          })}
    
  </Row>
</Container>
  
          
  
      </main>
    )
  }

  

  export default LoadHome;
