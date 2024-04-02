
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeBarView from '../../images/HomeBarView.png';
import Pancakes from '../../images/Pancakes.png';
import Windows from '../../images/WindowPatioView.png';
import FacebookFeed from '../../images/FacebookFeed.png';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

export default function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

return(
    <>
      <img fluid src={HomeBarView} alt='View of Shueys Bar' className='image '/>
    <Container fluid className='p-0'>
    
    
  
        <Container fluid className='special-events-container p-5'>
            <Row className="text-center mt-3">
                <Col xs={12 } md={5} lg={5} className="special-events m-2 p-0">
                    <h2 className='heading'>Special Events</h2>
                    <p>Come on by for some breakfast at Shuey’s! Pancakes, eggs, and more are served from 8:00am - 11:00am on Saturdays and Sundays. You can also join us for DJ Trivia Nights every Wednesday at 6:30pm! For more information on upcoming events, follow the Shuey’s Restaurant & Lounge Facebook page.</p>
                </Col>

                <Col xs={10} md={6} lg={6} className="pancakes">
                    <img className='border image' src={Pancakes} alt='Pancakes'/>
                </Col>
            </Row>
        </Container>

        <Container fluid className='happy-hour-container  '>
            <Row className='text-center'> 
                <Col lg={6} className="	d-none d-lg-block">
                    <img className='border ' src={Windows} alt='View of patio through the windows'></img>
                </Col>
                <Col xs={12} lg={5} className="specials m-2  p-2"> 
                    <h2 className='heading'>Happy Hour</h2>
                    <p>Shuey’s serves a variety of domestic and imported beers with a full services bar. We also offer soft drink Coke products. Stop by our weekday happy hour from 2:30pm - 5:30pm for $1.00 off of wells and domestics!</p>
                </Col>

  
                <Col lg={6} className="d-lg-none d-xl-none">
                    <img className='border' src={Windows} alt='View of patio through the windows'></img>
                </Col>
            </Row>
        </Container>

      



    <Row className='text-center'>
        <Col><h2 className='heading'>Follow us on Facebook</h2>
        <p>Click below to learn about upcoming events or buy a Shuey’s giftcard!</p>
        </Col>
       
    </Row>

    <Row className=''>
        <Col className='m-4'>
        <img  src={FacebookFeed} alt='Live link to Shueys Facebook page and gallery' className='image'/></Col>
    </Row>
    
    <Row className='mt-4 mb-5'>
        <Col className='review-column ms-3 me-2'>
            <h2 className='heading text-center'>Reviews</h2>

            <Carousel indicators={false} className="align-items-center" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="review-carousel text-center ps-5 pe-5">
                    <p className='mt-1 mb-1 p-5 review-text'>“Went to Shuey's to watch the Iowa game with my family and had a super positive experience! The food was great (I got the chicken quesadilla), the staff was nice and chatted with us for a bit, and the energy there for the game was super fun. Probably our new go-to spot for games!”</p>
                    <div className='d-flex justify-content-end me-5'>
                        <p className='ps-2'>-Madison S.</p>
                    </div>
                    
                </Carousel.Item>
                
                <Carousel.Item className="review-carousel text-center ps-5 pe-5">
                    <p className='mt-4 mb-5 p-5 review-text'>I liked the quesadilla that I ordered. Plenty of TVs to watch any sports you may desire. Service was quick and accurate. Their new building is quite the upgrade!</p>
                    <div className='d-flex justify-content-end me-5'>
                    <p>-Nick B.</p>
                    </div>
                    
                </Carousel.Item>
                
                <Carousel.Item className="review-carousel text-center ps-sm-5 pe-sm-5">
                    <p className='mt-4 mb-5 p-5 review-text'>Food was great, customer service was prompt and very helpful when I had questions about the menu. Looking forward to watching the Buffalo Bills games this fall and winter here. Go Bills!</p>
                    <div className='d-flex justify-content-end me-5'>
                    <p>-Philip F.</p>
                    </div>
                    
                </Carousel.Item>
            </Carousel>
        </Col>
    </Row>


    </Container>

    </>
)
}