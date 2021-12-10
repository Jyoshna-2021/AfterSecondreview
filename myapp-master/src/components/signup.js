import React, {useState}from 'react'
import {  Button, Paper, TextField } from '@mui/material';
import axios from 'axios';


const Signup = () => {

    var auth= localStorage.getItem('auth');

    //styles for container and all property fields
    const paperStyle = {padding :20, height:'70vh',width:'30vw', margin:'0px auto'}
    const emailStyle={margin:'10px 0 0 0'}
    const phoneStyle={margin:'10px 0 0 0'}
    const passwordStyle ={margin: '10px 0'}
    const btnstyle = {margin:'10px 0'}
    
    //hooks for all properties
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [phoneNumber,setphoneNumber]=useState("")
    const [password,setpassword]=useState("")

    //hooks for all Error properties
    const [usernameErr, setusernameErr]= useState({})
    const [emailErr,setemailErr]=useState({})
    const [phoneNumberErr,setphoneNumberErr]=useState({})
    const [passwordErr,setpasswordErr]=useState({})

    const clearstate= () => {
        setusername("");
        setemail("");
        setphoneNumber("");
        setpassword("");
    }
    const handleSubmit= (e) =>{  
        e.preventDefault();
        console.log("Clicked");
     if  ( formValidation())
        {
       
        axios.post("http://localhost:5001/add",
          {
             username:document.getElementById("username").value,
             email:document.getElementById("email").value,
             phoneNumber:document.getElementById("phoneNumber").value,
             password:document.getElementById("password").value
          }  
        )
        .then(resp=>{
            alert(resp.data.message)
            document.getElementById("username").value="";
            document.getElementById("email").value="";
            document.getElementById("phoneNumber").value="";
            document.getElementById("password").value="";
            clearstate();

            
          })
          
        console.log("working");
       
    }}
   
    //validation for our register form
    function formValidation(){
        const usernameErr={};
        const emailErr={};
        const phoneNumberErr={};
        const passwordErr={};
        let isValid=true;

        if( username ==="" || username.trim().length< 3||username.trim().length>15){
            usernameErr.usernameWrong = "Invalid Username";
            isValid=false;
        }
        if(email ==="" || (!email.includes('@')) || (!email.includes('gmail.com')))
        {
            emailErr.emailWrong = "Invalid Email"
            isValid=false;
        }
        
        if(phoneNumber === "" )
        {
            phoneNumberErr.phoneNumberWrong = "Invalid Phone number"
            isValid=false;
        }
        
        if(password === "" || password.trim().length < 4 || password.trim().length > 10 || (!password.includes('@')) && (!password.includes('#')) )
        {
            passwordErr.passwordWrong = "Invalid password"
            isValid=false;
        }
       
        setusernameErr(usernameErr);
        setemailErr(emailErr);
        setphoneNumberErr(phoneNumberErr);
        setpasswordErr(passwordErr);
        return isValid;


    }
    return (
        <div>
             <Paper style={paperStyle}>
               <h2>Register</h2>
               
               <TextField 
               id="username" 
               name="username" 
               label="Username" 
               placeholder="Enter username"  
               value={username}
               onChange={(e) => {setusername(e.target.value)}}
               fullWidth required/>
               {Object.keys(usernameErr).map((key) =>{
                   return <div style={{color:"red"}}>{usernameErr[key]}</div>
               })}
               
               <TextField 
               id="email" 
               name="email" 
               label="Email" 
               placeholder="Enter email"  
               style={emailStyle} 
               value={email} 
               onChange={(e) => {setemail(e.target.value)}}
               fullWidth required/>
               {Object.keys(emailErr).map((key) =>{
                   return <div style={{color:"red"}}>{emailErr[key]}</div>
               })}
               
               <TextField 
               id="phoneNumber" 
               type="number"
               name="phoneNumber" 
               label="Phone Number" 
               placeholder="Enter phone number"  
               style={phoneStyle} 
               value={phoneNumber}
                onChange={(e) => {setphoneNumber(e.target.value)}}
               fullWidth required/>
               {Object.keys(phoneNumberErr).map((key) =>{
                   return <div style={{color:"red"}}>{phoneNumberErr[key]}</div>
               })}
               
               <TextField 
               id="password" 
               name="password" 
               label="Password" 
               placeholder="Enter password"  
               type="text" 
               style={passwordStyle} 
               value={password}
               onChange={(e) => {setpassword(e.target.value)}}
               fullWidth required />
               {Object.keys(passwordErr).map((key) =>{
                   return <div style={{color:"red"}}>{passwordErr[key]}</div>
               })}
               
               <Button 
               onClick={handleSubmit} 
               type="submit" 
               color="primary" 
               variant="contained" 
               style={btnstyle} 
               fullWidth>Register</Button>
            
            </Paper>
            
        </div>
    )
}

export default Signup
