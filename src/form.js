import React from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';

require('dotenv').config();


const Form=({verifyCallBack, recaptchaLoaded, state, submit, changeregno, changeemail, changename, changecontactno, changehackerrankid})=>{
    return(
    <div className="body">
      <link href={"https://fonts.googleapis.com/css?family=Roboto&display=swap"} rel="stylesheet"></link>
        <Container id="main-container">
          <Row id="rows">
            <Col md={3}></Col>
            <Col md={6} id="form-div">
              <div id="techloop-cont">
                <img id="techloopLogo" src={"image.jpg"} alt="" />
              </div>
              <form>
                <label>Name<span> *</span></label>

                <input placeholder="e.g - John Wick" onChange={changename}/>
                <label>Registration No.<span> *</span></label>

                <input placeholder="e.g - 19BCE0011" onChange={changeregno}/>
                <label>Email<span> *</span></label>

                <input placeholder="e.g - foo@bar.com" onChange={changeemail}/>
                <label>Contact No.<span> *</span></label>

                <input placeholder="Your mobile number" onChange={changecontactno}/>
                <label>Hackerrank Id<span> *</span></label>

                <input placeholder="Your hackerrank id" onChange={changehackerrankid}/>
                <div id="recaptcha">
                    <Recaptcha style="margin: 0px auto;" sitekey={'6Lc6PLEUAAAAAN12MAcKIhEcaN7ptBXqLJCxkaxz'} render="explicit" onloadCallback={(res)=>{
                      console.log("loaded");
                    }} verifyCallback={verifyCallBack}/>
                </div>
                <div id="sub-div">
                  <Button variant="primary" id="button" onClick={()=>submit()}>Submit</Button>
                </div>
              </form>
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

export default Form;