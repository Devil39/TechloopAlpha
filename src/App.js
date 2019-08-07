import React from 'react';
import './App.css';
import Form from './form.js';
import ThankYou from './thankYou.js';
import validator from 'validator';

require('dotenv').config();

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
      isVerified: false,
      token: ""
    };
    this.repcaptchaLoaded=this.repcaptchaLoaded.bind(this);
    this.submit=this.submit.bind(this);
    this.verifyCallBack=this.verifyCallBack.bind(this);
  }

  verifyCallBack=(response)=>{
    //console.log(response);
    if(response){
      this.setState({
        isVerified: true
      });
      this.setState({token: response});
    }
    if(this.state.isVerified && this.state.domains.length===0){
      //this.pushdomains();
      //this.adddomains();
    }
  }

  repcaptchaLoaded=()=>{
    console.log("Success!");
  }

  checkNameInput=()=>{
    var flag=true;
    this.state.name.split(" ").map(val=>{
      if(!validator.isAlpha(val)){
        flag=false;
        //console.log(val);
        return false;
      }
      else{
        return true;
      }
    });
    return flag;
  }

  checkInputs=()=>{
    if((validator.isEmail(this.state.email)) && (validator.isMobilePhone(this.state.contactno)) && (validator.isAlphanumeric(this.state.regno)) && this.checkNameInput() && (validator.isAlphanumeric(this.state.other) || this.state.other==="")){
      return true;
    }
  }

  trimInputs=()=>{
    return new Promise((resolve,reject)=>{
      this.state.email.trim();
      this.state.name.trim();
      this.state.regno.trim();
      this.state.contactno.trim();
      resolve();
    });
  }

  submit= async ()=>{
    const x = await this.adddomains();
    //this.setState({domains: Array.from(this.state.domains)});
    var y=await this.trimInputs();
    var a=this.checkInputs();
    console.log(this.state);
    if(a){
      if(this.state.isVerified)
        {
          //console.log("Submit="+JSON.stringify(this.state));
          console.log("Submitted");
          fetch('https://techloop-alpha.herokuapp.com/api/user/reg',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: this.state.ocheck?JSON.stringify({
                'g-recaptcha-response': this.state.token,
                name: this.state.name,
                regNo: this.state.regno,
                email: this.state.email,
                contactNo: this.state.contactno,
                InitDomain: this.state.domains,
                other: this.state.other,
              })
              :JSON.stringify({
                'g-recaptcha-response': this.state.token,
                name: this.state.name,
                regNo: this.state.regno,
                email: this.state.email,
                contactNo: this.state.contactno,
                InitDomain: this.state.domains
            })
          })/*.then(res=>{console.log(res);console.log(res.json());var re=res.json();return re;})*/
          .then(res=>res.json())
          .then(async (data) =>{
              //console.log(data);
              if(data.status===200){
                //alert("Success!");
                this.setState({form: false});
                console.log(data);
              }
              else{
                // await this.resetState();
                // this.setState(()=>{
                // });
                // this.forceUpdate();
                console.log(data);
                alert("Error while registering user! Kindly check that you have no special characters added in any of the fields!");
              }
            }).catch( async (err)=>
            { 
              // await this.resetState();
              //   this.setState(()=>{
              //   });
              //   this.forceUpdate();
              console.log(err);
              alert("Error while registering user!");
            });
        }
      else
        {
          alert('Please verify that you are a human!');
        }
    }
    else{
      alert("Please check the form fields again, make sure there are no special characters in the fields(including dots)");
    }
  }
  changeregno=(event)=>{
    this.setState({regno: event.target.value});
    //console.log(event.target.value);
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
    return new Promise((resolve, reject) => {

      if(this.state.mlcheck)
       {
          this.setState(prevState=>{
            let domains=prevState.domains;
            if(domains.length===0)
             {
              domains=[];
              domains.push('M');
             }
            else
             {
               domains.push('M');
             }
            return {domains};
          });
          resolve();
       }
       if(this.state.wcheck)
       {
          this.setState(prevState=>{
            let domains=prevState.domains;
            if(domains.length===0)
             {
               domains=[];
               domains.push('W');
             }
            else
             {
               domains.push('W');
             }
            return {domains};
          });
          resolve();
       }
       if(this.state.acheck)
       {
          this.setState(prevState=>{
            let domains=prevState.domains;
            if(domains.length===0)
             {
              domains=[];
              domains.push('A');
             }
            else
             {
               domains.push('A');
             }
            return {domains};
          });
          resolve();
       }
       if(this.state.ocheck)
       {
          this.setState(prevState=>{
            let domains=prevState.domains;
            if(domains.length===0)
             {
              domains=[];
              domains.push('O');
             }
            else
             {
               domains.push('O');
             }
            return {domains};
          });
          resolve();
       }
       if(this.state.echeck)
       {
          this.setState(prevState=>{
            let domains=prevState.domains;
            if(domains.length===0)
             {
              domains=[];
              domains.push('E');
             }
            else
             {
               domains.push('E');
             }
            return {domains};
          });
          resolve();
       }
    })
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
    //var re=/[0-9]{2}[A-Z]{3}[0-9]{4}/;
    //console.log(String(this.state.regno).match(re));
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

  // componentDidMount(){
  //   console.log("Form loaded :", process.env.REACT_APP_API_URL)
  // }
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