import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import {FacebookShareCount,FacebookIcon} from "react-share";
import { NextSeo } from 'next-seo';
//import {FacebookShareCount,FacebookIcon} from "react-share";
//import {faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function Servicelist() {
    return(
        <div>


<NextSeo
      title="MacGregor Marine Services"
      description="MacGregor Marine Services
      Transport fluviomaritime dans le golfe de Guinée
      Mise à disposition d’attelage : Remorqueur + barge
      Remorquage et assistance
      Transbordement."
canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'Damen.jpg',
            width: 800,
            height: 600,
            alt: 'Og Damen stun',
          },
          {
            url: 'paysage.PNG',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'cor1.jpg' },
          { url: 'he1.jpg' },
        ],
        site_name: 'marine-service.vercel.app',
      }}/>

         
<Container>  
<Row className="mt-5">
<Col md={6}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
    <h2 className="mb-2">MacGregor Marine Services</h2>
    <ul>
        <li>
       <strong> Transport fluviomaritime dans le golfe de Guinée</strong> </li>
 
 <li><strong>Mise à disposition d’attelage : Remorqueur + barge</strong> </li>
  
 <li><strong>Remorquage et assistance</strong></li> 
  
 <li><strong>Transbordement</strong>  </li>
    </ul>
    
      </div>
      </div>
</Col>


<Col md={6}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="he.jpg" />
  </Card>
</Col>


      </Row>
  <Row>
  <Col lg={6} md={6}>
  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
         <div className="col p-4 d-flex flex-column position-static">
        <h4 className="text-center"> Nous intervenons sur le golfe de Guinée notamment au:</h4>
    <ul  >
        <li >
       <strong>Nigéria</strong> </li>
 
 <li><strong>Cameroun</strong> </li>
  
 <li><strong>Guinée équatoriale</strong></li> 
  
 <li><strong>Gabon</strong>  </li>
 <li><strong>Congo</strong>  </li>
 <li><strong>Angola</strong>  </li>
 <li><strong>Sao Tomé et principe</strong>  </li>
    </ul>
    
      </div>
      </div>
      </Col>

      <Col lg={6} md={6}>
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
         <div className="col p-4 d-flex flex-column position-static">

        <Image src="location.jpg" className="text-center" roundedCircle  style={{ width: '15rem' }}/>
        </div>
        </div>
      </Col>
  </Row>

  <FacebookIcon size={40} round={true} /><FacebookShareCount url={"https://marine-service.vercel.app/contact"} /><div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="box_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Partager</a></div>

      </Container>
      <style jsx>{
        `.text-center{
          display: flex;
  justify-content: center;
  align-items: center;
  }
  h4{
    justify-content: center;
    color: #002e5d;
  }
  h2{
    justify-content: center;
    color: #002e5d;
  }
        `
      }

      </style>
        </div>
    )
}