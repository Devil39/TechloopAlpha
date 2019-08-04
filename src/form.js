import React from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';

const Form=({recaptchaLoaded, state, mlcheckchange, wcheckchange, echeckchange, acheckchange, ocheckchange, submit, changeregno, changeemail, changename, changecontactno, changeother})=>{
    return(
    <div className="body">
      <link href={"https://fonts.googleapis.com/css?family=Roboto&display=swap"} rel="stylesheet"></link>
        <Container id="main-container">
          <Row id="rows">
            <Col md={3}></Col>
            <Col md={6} id="form-div">
              <img id="techloopLogo" src={"image.jpg"} alt="" />
              <form>
                <label>Name<span> *</span></label>
                <br/>
                <input placeholder="Your response" onChange={changename}/>
                <label>Registration No.<span> *</span></label>
                <br/>
                <input placeholder="Your response" onChange={changeregno}/>
                <label>Email<span> *</span></label>
                <br/>
                <input placeholder="Your response" onChange={changeemail}/>
                <label>Contact No.<span> *</span></label>
                <br/>
                <input placeholder="Your response" onChange={changecontactno}/>
                <label>Interested Domain(s)<span> *</span></label>
                <br/>
                <div id="checkStyle"><input type="checkbox" checked={state.mlcheck} className="checkBox" id="M" onChange={mlcheckchange}/><label id="oplabel">Machine Learning</label></div>
                <div id="checkStyle"><input type="checkbox" checked={state.wcheck} className="checkBox" id="W" onChange={wcheckchange}/><label id="oplabel" >Web Development</label></div>
                <div id="checkStyle"><input type="checkbox" checked={state.acheck} className="checkBox" id="A" onChange={acheckchange}/><label id="oplabel">Android Development</label></div>
                <div id="checkStyle"><input type="checkbox" checked={state.echeck} className="checkBox" id="E" onChange={echeckchange}/><label id="oplabel">Electronics</label></div>
                <div id="checkStyle"><input type="checkbox" checked={state.ocheck} className="checkBox" id="O" onChange={ocheckchange}/>
                  <label id="oplabel">Other: </label>
                  <input id="others" disabled={state.disabled} onChange={changeother}></input>
                </div>
                <Recaptcha
                  sitekey={"6LcaOLEUAAAAAP26mLS0Qxw6p0svnrtfq-duZ8dw"}
                  render="explicit"
                  onloadCallback={recaptchaLoaded}
                />
                <Button variant="primary" id="button" onClick={()=>submit()}>Submit</Button>
              </form>
            </Col>
            <Col md={3}></Col>
          </Row>
          <img src={"ieee.png"} id="ieee" alt=""></img>
        </Container>
      </div>
    );
}

export default Form;