import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Menu from '../components/menu.js'
import {ListGroup, Row, Col, Card, CardDeck, Carousel} from 'react-bootstrap'



export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Live stream</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Menu/>
        
        <CardDeck >
        <Carousel style={{width:"400px", height:"300px"}}>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="image-17.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="image-9.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="image-3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

       

        
        <Row style={{backgroundColor:"rgb(0,71,103)", width:"300px"}}>
    <Col sm={4}>
      <ListGroup style={{backgroundColor:"rgb(0,71,103)", width:"300px"}}>
        <ListGroup.Item className={styles.userlink} action href="#link1">
          Link 1
        </ListGroup.Item >
        <ListGroup.Item className={styles.userlink} action href="#link2">
          Link 2
        </ListGroup.Item>
        <ListGroup.Item className={styles.userlink} action href="#link3">
          Link 3
        </ListGroup.Item>
        <ListGroup.Item className={styles.userlink}action href="#link4">
          Link 4
        </ListGroup.Item>
        <ListGroup.Item className={styles.userlink} action href="#link5">
          Link 5
        </ListGroup.Item>
        <ListGroup.Item className={styles.userlink} action href="#link6">
          Link 6
        </ListGroup.Item>
        <ListGroup.Item className={styles.userlink} action href="#link7">
          Link 7
        </ListGroup.Item>
        <ListGroup.Item className={styles.userlink} action href="#link8">
          Link 8
        </ListGroup.Item>
        <ListGroup.Item className={styles.userlink} action href="#link9">
          Link 9
        </ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
  </CardDeck>
  
  <Row xs={10} md={3} className="g-4" style={{backgroundColor:"rgb(0,71,103)", color:"white", padding: "10px"}}>
  {Array.from({ length: 30 }).map((_, idx) => (
    <Col style={{backgroundColor:"rgb(0,71,103)", color:"white"}}>
      <Card className="border-0" style={{backgroundColor:"rgb(0,71,103)", color:"white"}}>
        <Card.Img  variant="top" src="/image-17.jpg" className={styles.cardimg} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}
