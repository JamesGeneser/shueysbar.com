
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import MenuBanner from '../../images/menu-banner.png';
// imported appetizer images
import RuebenRolls from '../../images/menu/appetizers/rueben-rolls.png'
import ShueysNachos from '../../images/menu/appetizers/shueys-nachos.jpeg'
import ChickenQuesadilla from '../../images/menu/appetizers/chicken-quesadilla.jpeg'
import Wings from '../../images/menu/appetizers/wings.jpeg'
// imported burger images
import SteakhouseBurger from '../../images/menu/burgers/steakhouse-burger.jpeg'
import DudekBurger from '../../images/menu/burgers/dudek-burger.jpeg'
// imported sandwich images
import ChickenCordonBleu from '../../images/menu/sandwiches/chicken-cordon-bleu.jpeg'
import BurntEndsMacAndCheese from '../../images/menu/sandwiches/burnt-ends-mac-and-cheese.jpeg'
import Tenderloin from '../../images/menu/sandwiches/pork-tenderloin.jpeg'
// imported salad images
import ChickenSalad from '../../images/menu/salads/chicken-salad.jpg'
import TacoSalad from '../../images/menu/salads/taco-salad.jpeg'
// imported wrap image
import BigBangWrap from '../../images/menu/wraps/big-bang-wrap.jpeg'



function Menu (){
    return(
       <>


      <img src={MenuBanner} className="menu-banner"/>
    <Container className='menu-container'>
        <Row className='text-center'><h2 className='heading  '>Menu</h2></Row>

        <Row className='m-4' id="top">
            <Col className='text-center' xs="4"><p><a className='menu-navigation' href="#appetizers">Appetizers</a></p></Col>
            <Col className='text-center' xs="4"><p><a className='menu-navigation' href="#burgers">Burgers</a></p></Col>
            <Col className='text-center' xs="4"><p><a className='menu-navigation' href="#sandwiches">Sandwiches</a></p></Col>
            <Col className='text-right' xs="5"><p><a className='menu-navigation' href="#salads">Salads</a></p></Col>
            <Col className='text-center' xs="6"><p><a className='menu-navigation' href="#wraps">Wraps</a></p></Col>
        </Row>

        <Row className='subtitle-row mt-3'>
            <h3 className='menu-subtitle mb-3' id="appetizers">Appetizers</h3>
            <p className='menu-subtitle-description p-3'>Each appetizer includes one sauce: Shuey’s Sauce, Ranch, Bleu Cheese, Garlic Parm, BBQ, Buffalo, Sweet Chili, Teriyaki, French, Honey Mustard, Thousand Island, Asian, Peppered Ranch or Balsamic Vinaigrette. Extra sauce - $1.00</p>
        </Row>
        <Container className="appetizer-container">

        <Row className='menu-item-row '>
            <Col>
            <p className='menu-item-title'>Shuey's Fries</p>
            <p className='menu-item-description'>Warm queso topped with fries, bacon bits & fresh herbs. $13.99</p>

            <p className='menu-item-title'>Breaded Mushrooms</p>
            <p className='menu-item-description'>Fried to a deep golden brown. $12.99</p>
            
            <p className='menu-item-title'>Pretzel Bites</p>
            <p className='menu-item-description'>Delicious soft pretzel bites with queso. $12.99</p>
        
            <p className='menu-item-title'>Cowboy Bites</p>
            <p className='menu-item-description'>Sweet corn, jalapeños, cream cheese & bacon. $12.99</p>
            
            <p className='menu-item-title'>Fried Pickle Spears</p>
            <p className='menu-item-description'>Try ’em - you’ll like ‘em. $12.99</p>

            <p className='menu-item-title'>Shotgun Shells</p>
            <p className='menu-item-description'>Breaded cheese curds fried to a golden brown. $12.99</p>

            <p className='menu-item-title'>Chicken Strips & Fries</p>
            <p className='menu-item-description'>Four breaded chicken strips & fries. $13.99</p>
        
            <p className='menu-item-title'>Chicken Quesadilla</p>
            <p className='menu-item-description'>A large quesadilla with seasoned chicken, cheese, tomatoes, onions & Shuey’s sauce. $13.99</p>

            <p className='menu-item-title'>Chips & Queso Dip</p>
            <p className='menu-item-description'>Homemade queso & chips. $10.99 Add extra chips - $1.00 Add beef taco meat - $2.00</p>

            <p className='menu-item-title'>Wings</p>
            <p className='menu-item-description'>Bone-in or boneless wings served with your choice of sauce. $13.99</p>

            <p className='menu-item-title'>Shuey's Nachos</p>
            <p className='menu-item-description'>Fresh tortilla chips smothered in queso, lettuce, tomatoes, onions & jalapeños, with chicken or beef taco meat. $14.99</p>
        
            </Col>
            <Col className='d-none d-sm-block'>
                <img src={RuebenRolls} alt="rueben rolls" className='small-image me-0'/>
                <img src={ShueysNachos} alt="shueys nachos" className='small-image'/>
                <img src={ChickenQuesadilla} alt="chicken quesadilla" className='small-image skew-right'/>
                <img src={Wings} alt="wings" className='small-image' />
            </Col>
            
        </Row>

        <Carousel indicators={false} className='text-center menu-carousel d-block d-sm-none'>
      <Carousel.Item>
      <img src={RuebenRolls} className="carousel-image" alt="Rueben Rolls" />
     
      </Carousel.Item> 
     <Carousel.Item>
     <img src={ShueysNachos} className="carousel-image" alt="Shuey's Nachos" />
   
      </Carousel.Item>
      <Carousel.Item>
      <img src={ChickenQuesadilla} className="carousel-image" alt="Chicken Quesadilla" />
  
      </Carousel.Item> 
      <Carousel.Item>
      <img src={Wings} className="carousel-image" alt="Wings" />
   
      </Carousel.Item> 
        </Carousel> 

    </Container>


    <Row className='subtitle-row'>
        <h3 className='menu-subtitle' id="burgers">Burgers</h3>
        <p className='menu-subtitle-description'>Add cheese for $1.00 or bacon for $2.00. All burgers are served with french fries. Substitute cottage cheese or coleslaw for $2.99 or a side salad for $4.29. *All burgers cooked medium well.</p>
    </Row>

    <Container className='burger-container'>




        <Row className='menu-item-row '>
            <Col>
            <p className='menu-item-title'>Shuey's Burger</p>
            <p className='menu-item-description'>1/3 lb burger cooked to perfection. $12.99</p>

            <p className='menu-item-title'>Mushroom Swiss Burger</p>
            <p className='menu-item-description'>1/3 lb burger topped with mushrooms, Swiss cheese & Shuey’s sauce. $14.99</p>

            <p className='menu-item-title'>Dudek Burger</p>
            <p className='menu-item-description'>1/3 lb burger topped with sauerkraut, bacon, jalapeños & pepper jack cheese. $14.99</p>

            <p className='menu-item-title'>Shuey's Mac and Cheese Burger</p>
            <p className='menu-item-description'>1/3 lb burger topped with bacon & homemade mac & cheese. $14.99</p>

            <p className='menu-item-title'>Steak House Burger</p>
            <p className='menu-item-description'>1/3 lb burger with bacon, bleu cheese crumbles, A1 sauce & onion straws. $15.99</p>
            </Col>

            <Col className='d-none d-sm-block'>
                <img src={SteakhouseBurger} alt="steak house burger" className='small-image skew-right'/>
                <img src={DudekBurger} alt="dudek burger" className='small-image'/>

            </Col>  
        </Row>

        <Carousel indicators={false}  className='text-center menu-carousel d-xs-block d-sm-none'>
            <Carousel.Item>
                <img src={SteakhouseBurger} className="carousel-image" alt="Steakhouse Burger" />
           
            </Carousel.Item>

            <Carousel.Item>
                <img src={DudekBurger} className="carousel-image" alt="Dudek Burger" />
      
            </Carousel.Item>
       </Carousel> 

    </Container>


        <Row className='subtitle-row '>
            <h3 className='menu-subtitle' id="sandwiches">Sandwiches</h3>
            <p className='menu-subtitle-description'>All sandwiches are served with french fries. Substitute cottage cheese or coleslaw for $2.99 or a side salad for $4.29.</p>
        </Row>
        
        <Container className='sandwich-container '>
            <Row className='menu-item-row'>
            <Col>
            <p className='menu-item-title'>Shuey's BLT</p>
            <p className='menu-item-description'>Bacon stacked high with lettuce, tomato & peppered ranch on a toasted hoagie roll. $13.99</p>

            <p className='menu-item-title'>Shuey's Horsey</p>
            <p className='menu-item-description'>Tri-tip beef served medium rare with Shuey’s Horsey sauce. Served hot or cold. $15.99</p>

            <p className='menu-item-title'>Chicken Cordon Bleu</p>
            <p className='menu-item-description'>Breaded or grilled chicken sandwich topped with ham & melted Swiss cheese. $13.99</p>
   
            <p className='menu-item-title'>Reuben</p>
            <p className='menu-item-description'>Fresh sliced seasoned corned beef brisket, topped with sauerkraut, Swiss cheese & Thousand Island dressing on marble rye.</p>
            
            <p className='menu-item-title'>Rachel</p>
            <p className='menu-item-description'>Reuben’s better half... Turkey, coleslaw, Thousand Island dressing & Swiss cheese served on marble rye. $14.99</p>

            <p className='menu-item-title'>Burnt Ends Mac & Cheese Sandwich</p>
            <p className='menu-item-description'>Pork burnt ends with BBQ sauce & homemade mac & cheese served on jalapeño cornbread. $14.99</p>

            <p className='menu-item-title'>Tenderloin</p>
            <p className='menu-item-description'>Juicy pork loin hand-breaded & fried to perfection. Also available grilled. $14.99</p>

            <p className='menu-item-title'>Philly</p>
            <p className='menu-item-description'>Hand-cut beef, marinated and seasoned, then topped with peppers, onions, Swiss cheese & served on a toasted hoagie roll. $14.99</p>

            <p className='menu-item-title'>Shuey's Turkey Melt</p>
            <p className='menu-item-description'>Hot turkey with bacon, Swiss cheese & honey mustard on a pretzel bun. $14.99</p>
            </Col>

            <Col className='d-none d-sm-block'>
                <img src={ChickenCordonBleu} alt="chicken cordon bleu" className='small-image skew-right'/>
                <img src={BurntEndsMacAndCheese} alt="burnt ends mac and cheese" className='small-image'/>
                <img src={Tenderloin} alt="tenderloin" className='small-image'/>
            </Col> 
            </Row>
        
 

            <Carousel indicators={false}  className='text-center menu-carousel d-block d-sm-none'>
                <Carousel.Item>
                    <img src={ChickenCordonBleu} className="carousel-image" alt="Chicken Cordon Bleu" />
                 
                </Carousel.Item> 

                <Carousel.Item>
                    <img src={BurntEndsMacAndCheese} className="carousel-image" alt="Burnt Ends Mac & Cheese Sandwich" />
                 
                </Carousel.Item>

                <Carousel.Item>
                    <img src={Tenderloin} className="carousel-image" alt="Pork Tenderloin" />
               
                </Carousel.Item> 
      
            </Carousel> 
        </Container>


        <Row className='subtitle-row'>
            <h3 className='menu-subtitle' id="salads">Salads</h3>
            <p className='menu-subtitle-description'>Dressings: Ranch, Thousand Island, Bleu Cheese, French, Honey Mustard, Peppered Ranch or Balsamic Vinaigrette.</p>
        </Row>

        <Container className='salad-container text-center'>
            <Row className='menu-item-row '>
                <Col>
                <p className='menu-item-title'>Asian Chicken Salad</p>
                <p className='menu-item-description'>Crisp greens topped with grilled or breaded chicken, with stir-fry vegetables & crispy rice noodles. $14.99</p>

                <p className='menu-item-title'>Chicken Salad</p>
                <p className='menu-item-description'>Fresh greens, tomatoes, cucumbers, onion, cheese & breaded or grilled chicken. $13.99 Make it Buffalo for $1.00</p>

                <p className='menu-item-title'>Southwest Chicken Salad</p>
                <p className='menu-item-description'>Fresh greens, grilled chicken, cheddar cheese, black beans, corn, tomato, red onion & tortilla chips. $14.99</p>

                <p className='menu-item-title'>Chef Salad</p>
                <p className='menu-item-description'>Fresh greens with ham, turkey, onion, tomato, cucumber, egg & shredded cheese. $14.99</p>
   
                <p className='menu-item-title'>Taco Salad</p>
                <p className='menu-item-description'>Fresh greens in a crispy tortilla shell topped with tomato, jalapeños, red onion & shredded cheese. Choose grilled chicken or taco meat. Served with salsa & sour cream. $14.99</p>

                </Col>
                <Col className='d-none d-sm-block'>
                <img src={ChickenSalad} alt="chicken salad" className='small-image skew-right'/>
                <img src={TacoSalad} alt="taco salad" className='small-image'/>
                </Col> 
            </Row>


            <Carousel indicators={false}  className='text-center menu-carousel d-block d-sm-none'>
                <Carousel.Item>
                    <img src={ChickenSalad} className="carousel-image" alt="Chicken Salad" />
               
                </Carousel.Item> 

                <Carousel.Item>
                    <img src={TacoSalad} className="carousel-image" alt="Taco Salad" />
         
                </Carousel.Item>     
            </Carousel> 
        </Container>


        <Row className='subtitle-row '>
        <h3 className='menu-subtitle' id="wraps">Wraps</h3>
        <p className='menu-subtitle-description'>All wraps served with french fries. Substitute cottage cheese or coleslaw for $2.99 or a side salad for $4.29.</p>
        </Row>
        <Container className='wrap-container'>
                <Row className='menu-row '>
                <Col>
                <p className='menu-item-title'>Bang Bang Wrap</p>
                <p className='menu-item-description'>Breaded or grilled chicken tossed in sweet chili sauce with lettuce, tomato, green onions & shredded cheese. Cut in half and topped with Shuey’s sauce. $15.29</p>

                <p className='menu-item-title'>Chicken Wrap</p>
                <p className='menu-item-description'>Breaded or grilled with lettuce, tomato & cheddar cheese. $13.99 Served with your choice of ranch or bleu cheese sauce. Make it a Buffalo wrap for $1.00</p>

                <p className='menu-item-title'>Asian Chicken Wrap</p>
                <p className='menu-item-description'>Crisp greens with grilled chicken, stir-fry vegetables & crispy noodles tossed in Asian dressing. $14.99</p>

                <p className='menu-item-title'>Asian Bowl</p>
                <p className='menu-item-description'>Grilled chicken & stir-fry vegetables with teriyaki sauce served over a bed of rice.</p>
                </Col>
                <Col className='d-none d-sm-block'>
                <img src={BigBangWrap} alt="big bang wrap" className='small-image skew-right'/>
                </Col>

                </Row>
            </Container>
        <Container className='kids-menu-features-container'>
            <Row>
            <Col className='kids-menu-box text-center m-4 p-4'>
            <h3 className='menu-section-title bebas' id="kidsmenu">Kids Menu</h3>
            <div className='public-sans '>
            <p >12 & under, please. All items are served with one side: French fries or apple sauce. $7.99</p>
            <p className='mb-0'>Mac & Cheese</p>
            <p className='mb-0'>Chicken Strips</p>
            <p className='mb-0'>Grilled Cheese</p>
            </div>
            </Col>
            <Col className='features-box text-center m-4 p-4'>
            <h3 className='menu-section-title bebas'>Ask your server about our weekday features!</h3>
            <div className='public-sans'>
            <p className='mb-0 mt-5'>We have soup!</p>
            <p>Coca-cola products avaliable.</p>
            </div>
            </Col>
            </Row>


        </Container>
            <div className='d-flex align-items-center justify-content-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M15.2317 21.6009H23.8984V40.9276L28.2534 40.9926V21.6009H36.8984L26.065 10.7676L15.2317 21.6009Z" fill="black"/>
            </svg>
            <h4 className='text-center bebas  m-4'><a href='#top' className='back-to-top'>Back To Top</a></h4>

            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M15.2317 21.6009H23.8984V40.9276L28.2534 40.9926V21.6009H36.8984L26.065 10.7676L15.2317 21.6009Z" fill="black"/>
            </svg>
            </div>

    </Container>
        </>
        )
}

export default Menu;