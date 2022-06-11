const Produto = ({ productId, productName, brand, brandId, brandImageUrl, linkText, productReference,
    productReferenceCode, categoryId, productTitle, metaTagDescription, releaseDate, clusterHighlights, 
    productClusters,searchableClusters, categories, categoriesIds, link, description, items     }) => {
  
    return (
      <div>Id: {productId}  Produto: {productName}  Titulo:{productTitle} Data: {releaseDate} 
      Descricao: {description}  item: <Image {...items[0].images[0]}/> </div>
    )
  }

  const Image = ({imageId,imageLabel,imageTag, imageUrl, imageText, imageLastModified}) => {
    return(
      <div> <img src={imageUrl} /></div>
    )
  }

  export default Produto