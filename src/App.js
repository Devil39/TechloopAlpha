import React from 'react';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class App extends React.Component
{
  constructor(){
    super();
    this.state={
      regno: "",
      name: "",
      email: "",
      contactno: "",
      domains: [],
      other: "",
      disabled: "",
      mlcheck: false,
      echeck: false,
      wcheck: false,
      acheck: false,
      ocheck: false
    };
  }
  submit=()=>{
    console.log("Submit="+JSON.stringify(this.state));
    // console.log("Submitted");
    // console.log(this.state);
    // fetch('',{
    //   method: 'post',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //       name: this.state.name,
    //       regNo: this.state.regno,
    //       email: this.state.email,
    //       contactNo: this.state.contactno,
    //       InitDomain: this.state.domains,
    //       other: this.state.other
    //   })
    // })/*.then(res=>{console.log(res);console.log(res.json());var re=res.json();return re;})*/
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log("data");
    //   }).catch(()=>
    //   {
    //     console.log("Error!");
    //   });
  }
  changeregno=(event)=>{
    this.setState({regno: event.target.value});
    //console.log(this.state.name);
  }
  changename=(event)=>{
    this.setState({name: event.target.value});
    //console.log(this.state.name);
  }
  changeemail=(event)=>{
    this.setState({email: event.target.value});
    //console.log(this.state.name);
  }
  changecontactno=(event)=>{
    this.setState({contactno: event.target.value});
    //console.log(this.state.name);
  }
  changeother=(event)=>{
    this.setState({other: event.target.value});
    //console.log(this.state.name);
  }
  adddomains=(a)=>{
    this.setState(prevState=>{
      let domains=Object.assign({},prevState.domains);
      domains.append(a);
      return {domains};
    });
    //console.log(this.state.name);
  }
  removedomains=(a)=>{
    this.setState(prevState=>{
      let domains=Object.assign({},prevState.domains);
      domains.splice(domains.indexOf(a),1);
      return {domains};
    });
    //console.log(this.state.name);
  }
  mlcheckchange=(event)=>{
    this.setState({mlcheck: !this.state.mlcheck});
  }
  echeckchange=(event)=>{
    this.setState({echeck: !this.state.echeck});
  }
  acheckchange=(event)=>{
    this.setState({acheck: !this.state.acheck});
  }
  ocheckchange=(event)=>{
    this.setState({ocheck: !this.state.ocheck});
  }
  wcheckchange=(event)=>{
    this.setState({wcheck: !this.state.wcheck});
  }
  render(){
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
                <div id="checkStyle"><input type="checkbox" checked={this.state.checked} className="checkBox" id="M" onChange={this.mlcheckchange}/><label id="oplabel">Machine Learning</label></div>
                <div id="checkStyle"><input type="checkbox" className="checkBox" id="W"/><label id="oplabel" onChange={this.wcheckchange}>Web Development</label></div>
                <div id="checkStyle"><input type="checkbox" className="checkBox" id="A"/><label id="oplabel" onChange={this.acheckchange}>Android Development</label></div>
                <div id="checkStyle"><input type="checkbox" className="checkBox" id="E"/><label id="oplabel" onChange={this.echeckchange}>Electronics</label></div>
                <div id="checkStyle"><input type="checkbox" className="checkBox" id="O" onChange={this.ocheckchange}/>
                  <label id="oplabel">Other: </label>
                  <input id="others"></input>
                </div>
                <Button variant="primary" id="button" onClick={()=>this.submit()}>Submit</Button>
              </form>
            </Col>
            <Col md={3}></Col>
          </Row>
          <img src={"ieee.png"} id="ieee" alt=""></img>
        </Container>
      </div>
    );
  }
}

export default App;