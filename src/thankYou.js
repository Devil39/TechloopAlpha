import React from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './thankYou.css';

const ThankYou=({resetState})=>{
    return (
        <div className="body">
      <link href={"https://fonts.googleapis.com/css?family=Roboto&display=swap"} rel="stylesheet"></link>
        <Container id="main-container">
          <Row id="rows">
            <Col md={3}></Col>
            <Col md={6} id="form-div">
              <div id='paneer'>
                <h1 id="one">Thank you</h1>
                <h5 id="two">for your submission</h5><br/>
                <p id="three">See you soon at Techloop Alpha :)</p><br/>
                <p id="three">For updates follow us on</p><br/>
                    <div id="a"><img src={"Insta.png"} id="image" alt=""/><label >@ieeevitvellore</label></div>
                    <div id="b"><img src={"f_logo_RGB-Blue_72.png"} id="image" alt=""/><label>IEEE VIT Chapter</label></div>
                <p id="five" onClick={resetState}>Submit another response</p>

                {/* <p className="one">Thank You</p>
                <p className="two">for the submission!</p>
                <p className="three">See you soon at Techloop Alpha :)</p>
                <p className="four" onClick={resetState}>Submit another response</p> */}
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
          <div id="con-ieee">
            <img src={"ieee.png"} id="ieee_logo" alt=""></img>
          </div>
        </Container>
      </div>
    );
}

export default ThankYou;