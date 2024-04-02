import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutBanner from '../../images/about-banner.jpeg';
import ShueysStory from '../../images/shueys-story.jpeg';

export default function About() {
  return (
    <>
    <img src={AboutBanner} className="image"/>
      <Container fluid className="about-container">
        
        <Row>
          <Col>
            <h2 className='heading text-center'>Shuey's Story</h2>
          </Col>
        </Row>



        <Row className='d-flex justify-content-center'>
          <Col md={6} className="text-center m-1 shueys-story p-4">
            <p>Known as the “Cheers” of Shueyville, Shuey’s Restaurant & Lounge is a local hot spot for neighborhood gatherings, watching Iowa athletics, or enjoying a nice bite to eat. </p>
            <br/>
            <p>
               Shuey’s is owned by Dave Brown, Ken Brown, and Jordan Caviness, and has been operated by Jordan Caviness and general manager Shannon Kinion for almost 10 years now. Back in 2021, Shuey’s experienced a tragic electrical fire that left the building unusable. But, through community perseverance Shuey’s came back even stronger with new construction of over 5,000 sq ft. The new building now has all modern appliances, over twenty 70” TVs, and a nice outdoor area with gas fires that make for a great experience inside or outside. 
            </p>
            <br/>
            <p>
               Conveniently located between Iowa City and Cedar Rapids, Shuey’s is the perfect place to stop in and enjoy a good meal!
            </p>
          </Col>
          <Col className='m-2' md={6}>
            <img src={ShueysStory} className="image border-vertical"/>
          </Col>
        </Row>

        <Row>
          <Col>
          </Col>
        </Row>
      </Container>

    </>
  )
}
