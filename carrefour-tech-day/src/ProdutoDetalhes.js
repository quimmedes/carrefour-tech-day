import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carregando from './Carregando'
import Image from 'react-bootstrap/Image'


function ProdutoDetalhes(){

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

<Container>


 
    
    {lista.map((lista) => {

      if(lista.productId == 4745249)
      return <Produtos key={lista.productId} {...lista}  />;


          })}
    
  
</Container>
  
          
  
      </main>
    )
  }




const Produtos = ({ productId, productName, brand, brandId, brandImageUrl, linkText, productReference,
    productReferenceCode, categoryId, productTitle, metaTagDescription, releaseDate, clusterHighlights, 
    productClusters,searchableClusters, categories, categoriesIds, link, description, items     }) => {
  
    return (
      <div>
        
        <Row>
    <Col> <Images {...items[0].images[0]}/></Col>
    <Col> <h2>Produto: {productName} </h2> Titulo:{productTitle} Data: {releaseDate}</Col>
  </Row>
  <Row>
    <Col>Descricao: {description} </Col>
    
  </Row>
      
         
  </div>
    )
  }

  const Images = ({imageId,imageLabel,imageTag, imageUrl, imageText, imageLastModified}) => {
    return(
      <div> <img src={imageUrl}  className='img-fluid rounded'
      alt=''
      style={{ maxWidth: '24rem' }} /></div>
    )
  }



 

  export default ProdutoDetalhes