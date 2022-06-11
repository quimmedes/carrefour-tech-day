import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Produto = ({ productId, productName, brand, brandId, brandImageUrl, linkText, productReference,
    productReferenceCode, categoryId, productTitle, metaTagDescription, releaseDate, clusterHighlights, 
    productClusters,searchableClusters, categories, categoriesIds, link, description, items     }) => {
  
    return (

      <div>
 
    <Col>
      <Card>
      <Images {...items[0].images[0]}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Produto: {productName}

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

        
                 
        </div>

    )
  }

  const Images = ({imageId,imageLabel,imageTag, imageUrl, imageText, imageLastModified}) => {
    return(
      
      
      <div>  <Card.Img variant="top" src={imageUrl}  />
       </div>
    )
  }

 

  export default Produto;