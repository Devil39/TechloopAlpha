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
      ohter: "",
      disabled: ""
    };
  }
  submit=()=>{
    //console.log("Submit="+this.state.name);
    console.log("Submitted");
    console.log(this.state);
    fetch('',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          name: this.state.name,
          regNo: this.state.regno,
          email: this.state.email,
          contactNo: this.state.contactno,
          InitDomain: this.state.domains,
          other: this.state.other
      })
    })/*.then(res=>{console.log(res);console.log(res.json());var re=res.json();return re;})*/
    .then(res=>res.json())
    .then(data=>{
        console.log("data");
      }).catch(()=>
      {
        console.log("Error!");
      });
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
                  <input className="textField" placeholder="Your response" onChange={this.changename}/>
                  <label>Registration No.<span> *</span></label>
                  <br/>
                  <input className="textField" placeholder="Your response" onChange={this.changeregno}/>
                  <label>Email<span> *</span></label>
                  <br/>
                  <input className="textField" placeholder="Your response" onChange={this.changeemail}/>
                  <label>Contact No.<span> *</span></label>
                  <br/>
                  <input className="textField" placeholder="Your response" onChange={this.changecontactno}/>
                  <label>Interested Domain(s)<span> *</span></label>
                  <br/>
                  <input className="checkBox" type="checkbox"/>
                  <Button variant="primary" id="button" onClick={()=>this.submit()}>Submit</Button>
                </form>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default App;