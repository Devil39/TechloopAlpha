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
      hackerrankid: "",
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

  checkOtherInput=()=>{
    var flag=true;
    this.state.other.split(" ").map(val=>{
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
    if((validator.isEmail(this.state.email)) && (validator.isMobilePhone(this.state.contactno)) && (validator.isAlphanumeric(this.state.regno)) && this.checkNameInput() && (this.checkOtherInput() || this.state.other==="")){
      return true;
    }
  }

  trimInputs=()=>{
    return new Promise((resolve,reject)=>{
      this.setState({email: this.state.email.trim()});
      this.setState({name: this.state.name.trim()});
      this.setState({regno: this.state.regno.trim()});
      this.setState({contactno: this.state.contactno.trim()});
      this.setState({hackerrankid: this.state.hackerrankid.trim()});
      resolve();
    });
  }

  submit = async () => {
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
            body: JSON.stringify({
                'g-recaptcha-response': this.state.token,
                name: this.state.name,
                regNo: this.state.regno,
                email: this.state.email,
                contactNo: this.state.contactno,
                hackerrankid: this.state.hackerrankid
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
                alert(data.msg);
                window.grecaptcha.reset();
                //alert("Error while registering user! Kindly check that you have no special characters added in any of the fields!");
              }
            }).catch( async (err)=>
            { 
              // await this.resetState();
              //   this.setState(()=>{
              //   });
              //   this.forceUpdate();
              console.log(err);
              //alert("Error while registering user!");
              alert(JSON.stringify(err));
            });
        }
      else
        {
          alert('Please verify that you are a human!');
        }
    }
    else{
      //alert("Please check the form fields again, make sure there are no special characters in the fields(including dots)");
      alert("Oops, make sure not to have special character in any field");
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
  changehackerrankid=(event)=>{
    //console.log(event.target.value);
    this.setState({other: event.target.value});
    //console.log(this.state.name);
  }
  resetState=()=>{
    let a={
      regno: "",
      name: "",
      email: "",
      contactno: "",
      hackerrankid: "",
      disabled: true,
      form: true
    };
    this.setState(prevState=>{
      return a;
    });
  }
  // componentDidMount(){
  //   console.log("Form loaded :", process.env.REACT_APP_API_URL)
  // }
  render(){
    return(
      <div>
        {
        this.state.form
          ?<Form verifyCallBack={this.verifyCallBack} recaptchaLoaded={this.recaptchaLoaded} state={this.state} submit={this.submit} changeemail={this.changeemail} changeregno={this.changeregno} changename={this.changename} changecontactno={this.changecontactno} changehackerrankid={this.changehackerrankid}/>
          :<ThankYou resetState={this.resetState}/>
        }
      </div>
    );
  }
}

export default App;