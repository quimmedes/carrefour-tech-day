import { useNavigate } from "react-router-dom";


const Produto = ({ productId, productName, brand, brandId, brandImageUrl, linkText, productReference,
    productReferenceCode, categoryId, productTitle, metaTagDescription, releaseDate, clusterHighlights, 
    productClusters,searchableClusters, categories, categoriesIds, link, description, items     }) => {

      const nav = useNavigate();


  //Retorna Unidades de Produto
    return (

      <div className="Container">
      <div className="Bloco">
      <Images {...items[0].images[0]}/>

      </div>
     <div className="CardText">{productName}</div>
      <div className="Flex-start">
        <div className="PrecoTag">{items[0].sellers[0].commertialOffer.Price.toString().replace('.',',')} R$/ {items[0].measurementUnit}</div>
      </div>
     <div className="Flex-end">
     <div className="Flex-bottom">

      <button type="button" className="BigButton" onClick={()=>{ nav('/ProdutoDetalhes/'+productId)  }}>Mais Detalhes</button>
      </div>
      </div>

     </div>
   
                   

    )
  }


  const Images = ({imageId,imageLabel,imageTag, imageUrl, imageText, imageLastModified}) => {
    return(
      
      
      <div>  
             <img src={imageUrl} alt="..." className='Bloco'/>

       </div>
    )
  }




  export default Produto;