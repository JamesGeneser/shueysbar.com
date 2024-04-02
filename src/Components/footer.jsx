
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShueysLogo from '../images/ShueysLogo.png';
import FacebookLogo from '../images/FacebookLogo.svg'

function Footer() {




return(
<>
    <Container fluid className="footer-container">
        <Row className="d-flex justify-content-around align-items-center">
            <Col xs={8} md={4} lg={2}>
                <img src={ShueysLogo} alt="Shueys Logo" className="image"/>
            </Col>
            <Col className="d-flex flex-column justify-content-left mt-4" xs={3} sm={4} md={3} lg={2}>
                <img className="mt-5 pt-5 facebook-logo-footer" src={FacebookLogo} alt="Facebook Logo"/>
                <p className="me-auto mt-4 mb-0">©2024</p>
                <p className="d-none d-sm-block me-auto mb-0">Site Design by Madison Stahl</p>
                <p className="d-none d-sm-block me-auto mt-0">Built by James Geneser</p>
            </Col>

       
            <Col className="d-none d-sm-none d-md-block d-flex justify-content-start ps-0" md={4} lg={4} xl={4}>
                <p className="footer-heading">Hours:</p>
                    <Row className="">
                        <Col className="p-0" md={6} lg={4}>
                            <p className="footer-text-left">Sun-Thu</p>
                        </Col>
                        <Col md={6} lg={5}>
                            <p className="footer-text-right">
                                11:00am-10:00pm
                            </p>
                        </Col>
                   
                    </Row>
                    <Row>
                        <Col className="p-0" md={6} lg={4}>
                            <p className="footer-text-left">Fri-Sat</p>
                        </Col>
                        <Col md={6} lg={5}>
                            <p className="footer-text-right">8:00AM-1:00AM</p>
                        </Col>
                    </Row>
                    <div className="d-none d-md-block d-lg-none">
                            <p className="footer-heading">Location:</p>
                            <p className="footer-location-text mb-1">1158 Club Rd NE</p>
                            <p className="footer-location-text ">Cedar Rapids, IA 52333</p>
                    </div> 
            </Col>

            <Col className="d-none d-sm-none d-md-none d-lg-block" lg={2} >
                <p className="footer-heading">Location:</p>
                    <Row>
                        <Col>
                            <p className="footer-location-text mb-1">1158 Club Rd NE</p>
                            <p className="footer-location-text mb-1">Cedar Rapids, IA 52333</p>
                            <p className="footer-location-text ">United States</p>
                        </Col>
                    </Row>
            </Col>
      
            
        </Row>
    </Container>
</>

);


}

export default Footer;