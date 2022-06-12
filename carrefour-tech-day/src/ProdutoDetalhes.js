import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Carregando from './Carregando'

function ProdutoDetalhes(props){

    const [carregando, setCarregando] = useState(true)
    const [lista, setLista] = useState([])
    const { id } = useParams()
  
    let url = "https://justcors.com/tl_26283e1/https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=carrefourbr105";
  
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
      console.log( id)

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

      if(lista.productId == id )
      return <Produtos key={lista.productId} {...lista}  />;


          })}
    
  
</div>
  
          
  
      </main>
    )
  }



const Produtos = ({ productId, productName, brand, brandId, brandImageUrl, linkText, productReference,
    productReferenceCode, categoryId, productTitle, metaTagDescription, releaseDate, clusterHighlights, 
    productClusters,searchableClusters, categories, categoriesIds, link, description, items     }) => {

    
  
    return (
      <div className='grid-container'>
        
    <div className='grid-item item1'> <Images {...items[0].images[0]}/></div>
    <div className='grid-item item2'> <h3>Produto: {productName} </h3>  </div>
    <div className="grid-item item3">{items[0].sellers[0].commertialOffer.Price.toString().replace('.',',')} R$/ {items[0].measurementUnit}</div>
      <div className='grid-item item4'>Data: {new Date(releaseDate).toLocaleDateString()}</div>
  <div className='grid-item item5'>
  <div><b>Descrição: </b> {description} </div>
    <p><b>Marca:</b> {brand}</p>
    <p><b>Referencia:</b> {productReference}</p>
    <p> {metaTagDescription}</p>

  </div>
      
         
  </div>
    )
  }

  const cluster = (Id,String)=>{
    return(
      <div>{Id} {String}</div>
    )
  }

  const Images = ({imageId,imageLabel,imageTag, imageUrl, imageText, imageLastModified}) => {
    return(
      <div> <img src={imageUrl}  alt=''   style={{ maxWidth: '24rem' }} /> </div>
    )
  }



 

  export default ProdutoDetalhes