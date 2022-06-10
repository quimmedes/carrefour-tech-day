import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      </header>

       <LoadApi />

    </div>
  );
}

function LoadApi() {
  const [carregando, setCarregando] = useState(true)
  const [lista, setLista] = useState([])

  let url = "https://justcors.com/tl_68a61b8/https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=carrefourbr739";

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

const Image = ({imageId,imageLabel,imageTag, imageUrl, imageText, imageLastModified}) => {
  return(
    <div> <img src={imageUrl} /></div>
  )
}

const Produto = ({ productId, productName, brand, brandId, brandImageUrl, linkText, productReference,
  productReferenceCode, categoryId, productTitle, metaTagDescription, releaseDate, clusterHighlights, productClusters,searchableClusters, categories, categoriesIds, link, items     }) => {

  return (
    <div>Id: {productId}  Produto: {productName}  Titulo:{productTitle} Data: {releaseDate} item: <Image  {...items[0].images[0]}/> </div>
  )
}



const Carregando = () => {
  return (
    <div className="carregando">
      <h1>Carregando...</h1>
    </div>
  );
};


export default App;
