import React,{useState} from 'react';
import {  Button, Paper, TextField } from '@mui/material';
import axios from 'axios';

import { useNavigate } from 'react-router';


const Login = () => {
    let navigate=useNavigate();
    const paperStyle = {padding :20, height:'60vh',width:'30vw', margin:'0px auto'}
    const emailStyle={margin:'15px 0'}
    const passwordStyle ={margin: '15px 0'}
    const btnstyle = {margin:'15px 0'}
    const BASE_URL = process.env.REACT_APP_KEY;
    console.log(BASE_URL);
    const api_url = `${BASE_URL}/login`;
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const clearstate= () => {
        
        setemail("");
        setpassword("");
    }


    const handleSubmit= (e) =>{  
        e.preventDefault();
  
        console.log("Clicked");
        
        axios.post(api_url,
          {
             email:document.getElementById("email").value,
             password:document.getElementById("password").value
          }  
        )
        .then(resp=>{

     alert(resp.data.message);
            // console.log(resp.data)
            if(resp.data.message==='Login Successfull'){
            localStorage.setItem('email',JSON.stringify(resp.data))
            localStorage.setItem('log',true);
            document.getElementById("email").value="";
            document.getElementById("password").value="";
             clearstate();
            navigate('/nav');
            }
          })
          .catch(err =>{
              console.log(err);
          })
        console.log("working");
       
    }
    return (
        <div>
            <Paper style={paperStyle}>
               <h2>Login</h2>
               <TextField  
               id="email" 
               label="Email" 
               placeholder="Enter email"  
               style={emailStyle}
               value={email} 
               onChange={(e) => {setemail(e.target.value)}}
               fullWidth required/>

               <TextField 
               id="password" 
               label="Password" 
               placeholder="Enter password" 
               type="password"  
               style={passwordStyle}
               value={password}
               onChange={(e) => {setpassword(e.target.value)}}
               fullWidth required/>

               <Button 
               onClick={handleSubmit} 
               type="submit" 
               color="primary" 
               variant="contained" 
               style={btnstyle} 
               fullWidth>
                   Login</Button>
            </Paper>
          
        </div>
    )
}


export default Login
