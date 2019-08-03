import React from 'react';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="body"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      <Container id="main-container">
        <Row id="rows">
          <Col md={3}></Col>
          <Col md={6} id="form-div">
            <img id="techloopLogo" src={"image.jpg"} alt="" />
            <form>
              <label>Name<span> *</span></label>
              <br/>
              <input className="textField" placeholder="Your response" />
              <label>Registration No.<span> *</span></label>
              <br/>
              <input className="textField" placeholder="Your response" />
              <label>Email<span> *</span></label>
              <br/>
              <input className="textField" placeholder="Your response" />
              <label>Contact No.<span> *</span></label>
              <br/>
              <input className="textField" placeholder="Your response" />
              <label>Interested Domain(s)<span> *</span></label>
              <br/>
              <input className="checkBox" type="checkbox"/>
              <Button variant="primary" id="button">Submit</Button>
            </form>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;