import React from 'react';
import './App.css';
import Form from './form.js';
import ThankYou from './thankYou.js';

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
      disabled: true,
      mlcheck: false,
      echeck: false,
      wcheck: false,
      acheck: false,
      ocheck: false,
      form: true,
      isVerified: false
    };
    this.repcaptchaLoaded=this.repcaptchaLoaded.bind(this);
    this.submit=this.submit.bind(this);
    this.verifyCallBack=this.verifyCallBack.bind(this);
  }

  verifyCallBack=(response)=>{
    if(response){
      this.setState({
        isVerified: true
      });
    }
  }

  repcaptchaLoaded=()=>{
    console.log("Success!");
  }

  submit=()=>{
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
    if(this.state.isVerified)
     {
      this.setState({form: false});
      this.adddomains();
      console.log("Submit="+JSON.stringify(this.state));
     }
    else
     {
       alert('Please verify that you are a human!');
     }
  }
  changeregno=(event)=>{
    this.setState({regno: event.target.value});
    console.log(event.target.value);
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
    //console.log(event.target.value);
    this.setState({other: event.target.value});
    //console.log(this.state.name);
  }
  adddomains=(a)=>{
    if(this.state.mlcheck)
     {
        this.setState(prevState=>{
          let domains=prevState.domains;
          if(domains.length===0)
           {
             domains=[];
             domains=['M'];
           }
          else
           {
             domains.push('M');
           }
          return {domains};
        });
     }
     if(this.state.wcheck)
     {
        this.setState(prevState=>{
          let domains=prevState.domains;
          if(domains.length===0)
           {
             domains=[];
             domains=['W'];
           }
          else
           {
             domains.push('W');
           }
          return {domains};
        });
     }
     if(this.state.acheck)
     {
        this.setState(prevState=>{
          let domains=prevState.domains;
          if(domains.length===0)
           {
             domains=[];
             domains=['A'];
           }
          else
           {
             domains.push('A');
           }
          return {domains};
        });
     }
     if(this.state.ocheck)
     {
        this.setState(prevState=>{
          let domains=prevState.domains;
          if(domains.length===0)
           {
             domains=[];
             domains=['O'];
           }
          else
           {
             domains.push('O');
           }
          return {domains};
        });
     }
     if(this.state.echeck)
     {
        this.setState(prevState=>{
          let domains=prevState.domains;
          if(domains.length===0)
           {
             domains=[];
             domains=['E'];
           }
          else
           {
             domains.push('E');
           }
          return {domains};
        });
     }
  }
  // removedomains=(a)=>{
  //   this.setState(prevState=>{
  //     let domains=Object.assign({},prevState.domains);
  //     domains.splice(domains.indexOf(a),1);
  //     return {domains};
  //   });
  //   //console.log(this.state.name);
  // }
  changeDisabled=()=>{
    this.setState({disabled: !this.state.disabled});
  }
  resetState=()=>{
    let a={
      regno: "",
      name: "",
      email: "",
      contactno: "",
      domains: [],
      other: "",
      disabled: true,
      mlcheck: false,
      echeck: false,
      wcheck: false,
      acheck: false,
      ocheck: false,
      form: true
    };
    this.setState(prevState=>{
      return a;
    });
  }
  mlcheckchange=(event)=>{
    //console.log("Before="+this.state.mlcheck);
    this.setState({mlcheck: !this.state.mlcheck});
    //console.log(this.state.mlcheck);
    //this.acheckchange();
  }
  echeckchange=(event)=>{
    this.setState({echeck: !this.state.echeck});
    //console.log(this.state.mlcheck);
  }
  acheckchange=(event)=>{
    this.setState({acheck: !this.state.acheck});
  }
  ocheckchange=(event)=>{
    this.setState({ocheck: !this.state.ocheck});
    this.changeDisabled();
  }
  wcheckchange=(event)=>{
    this.setState({wcheck: !this.state.wcheck});
  }
  render(){
    return(
      <div>
        {
        this.state.form
          ?<Form verifyCallBack={this.verifyCallBack} recaptchaLoaded={this.recaptchaLoaded} state={this.state} mlcheckchange={this.mlcheckchange} echeckchange={this.echeckchange} acheckchange={this.acheckchange} ocheckchange={this.ocheckchange} wcheckchange={this.wcheckchange} submit={this.submit} changeemail={this.changeemail} changeregno={this.changeregno} changename={this.changename} changecontactno={this.changecontactno} changeother={this.changeother}/>
          :<ThankYou resetState={this.resetState}/>
        }
      </div>
    );
  }
}

export default App;