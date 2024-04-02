import React, {useRef} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplyBanner from '../../images/apply-banner.jpeg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';


export default function Apply() {

const form = useRef()
const sendEmail = (e) => {
  e.preventDefault()


  emailjs
  .sendForm('service_wj9143v', 'template_35icehm', form.current, {
    publicKey: 'tP_BuxVG15lZc9BQO',
  })
  .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
    e.target.reset()
  );
}

  return (
    <>
    <img src={ApplyBanner} className="image"/>
    <Container fluid className="apply-container m-4 d-flex flex-column justify-content-center">

      <Row className='text-center mt-4'>
        <Col>
          <h2 className='heading'>Want to Work With Us?</h2>
        </Col>
      </Row>
      <Row className='text-center mt-5'>
        <Col>
          <p className='public-sans'>If you’d like to become a part of the Shuey’s family, fill out the application interest form below! You will be contacted at a later date with further information/instructions.</p>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col className='d-flex flex-column align-items-center mt-4 contact-column'>
          <h2 className='sub-heading bebas mb-4'>Contact Form</h2>

          <Form ref={form} onSubmit={sendEmail}  className='pt-2 m-1 mb-4 form align-items-center'>

            <Form.Group className="mb-3 m-4 form-input" controlId="FirstLastName">
              <Form.Label variant="dark" className='mt-4 form-text d-flex justify-content-left'>First and last name</Form.Label>
              <Form.Control name='user_name' type="user_name" />
            </Form.Group>

            <Form.Group className="mb-3 m-4" controlId="Email">
              <Form.Label className='form-text d-flex justify-content-left'>Email address</Form.Label>
                <Form.Control name="user_email" type="email"/>
            </Form.Group>

            <Form.Group className="mb-3 m-4" controlId="Position">
              <Form.Label className='form-text d-flex justify-content-left'>Position you're applying for</Form.Label>
              <Form.Control name="position" type="position" />
            </Form.Group>

            <Form.Group className="mb-3 m-4" controlId="ShortAnswer">
              <Form.Label className='form-text d-flex justify-content-left'>Tell us why you want to work at Shuey's</Form.Label>

             <Form.Control name="message" type='short-answer' as="textarea" rows={3}/>
            </Form.Group>

                  <Button variant="primary" type="submit" value="Send" className='button mb-4'>
                  Submit
                  </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}
