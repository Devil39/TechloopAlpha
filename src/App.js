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
              <input placeholder="Your response" />
              <label>Registration No.<span> *</span></label>
              <br/>
              <input placeholder="Your response" />
              <label>Email<span> *</span></label>
              <br/>
              <input placeholder="Your response" />
              <label>Contact No.<span> *</span></label>
              <br/>
              <input placeholder="Your response" />
              <label>Interested Domain(s)<span> *</span></label>
              <br/>
              <div id="checkStyle"><input type="checkbox" class="checkBox" id="M"/><label id="oplabel">Machine Learning</label></div>
              <div id="checkStyle"><input type="checkbox" class="checkBox" id="W"/><label id="oplabel">Web Development</label></div>
              <div id="checkStyle"><input type="checkbox" class="checkBox" id="A"/><label id="oplabel">Android Development</label></div>
              <div id="checkStyle"><input type="checkbox" class="checkBox" id="E"/><label id="oplabel">Electronices</label></div>
              <div id="checkStyle"><input type="checkbox" class="checkBox" id="O"/>
                <label id="oplabel">Other: </label>
                <input id="others"></input>
              </div>
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