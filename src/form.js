import React from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';

require('dotenv').config();


const Form=({verifyCallBack, recaptchaLoaded, state, mlcheckchange, wcheckchange, echeckchange, acheckchange, ocheckchange, submit, changeregno, changeemail, changename, changecontactno, changeother})=>{
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
                <label>Interested Domain(s)<span> *</span></label>

                <div id="checkStyle"><input type="checkbox" checked={state.mlcheck} className="checkBox" id="M" onChange={mlcheckchange}/><label id="oplabel">Machine Learning</label></div>
                <div id="checkStyle"><input type="checkbox" checked={state.wcheck} className="checkBox" id="W" onChange={wcheckchange}/><label id="oplabel" >Web Development</label></div>
                <div id="checkStyle"><input type="checkbox" checked={state.acheck} className="checkBox" id="A" onChange={acheckchange}/><label id="oplabel">Android Development</label></div>
                <div id="checkStyle"><input type="checkbox" checked={state.echeck} className="checkBox" id="E" onChange={echeckchange}/><label id="oplabel">Electronics</label></div>
                <div id="checkStyle"><input type="checkbox" checked={state.ocheck} className="checkBox" id="O" onChange={ocheckchange}/>
                  <label id="oplabel">Other: </label>
                  <input id="others" disabled={state.disabled} onChange={changeother}></input>
                </div>

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