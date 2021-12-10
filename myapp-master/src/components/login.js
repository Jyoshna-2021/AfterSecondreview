import React,{useState} from 'react';
import {  Button, Paper, TextField } from '@mui/material';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router';


const Login = () => {
    let navigate=useNavigate();
    const paperStyle = {padding :20, height:'60vh',width:'30vw', margin:'0px auto'}
    const emailStyle={margin:'15px 0'}
    const passwordStyle ={margin: '15px 0'}
    const btnstyle = {margin:'15px 0'}


    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")


    // const [emailErr,setemailErr]=useState({})
    // const [passwordErr,setpasswordErr]=useState({})

    const clearstate= () => {
       
        setemail("");
        setpassword("");
    }


    const handleSubmit= (e) =>{  
        e.preventDefault();
        //const isValid = formValidation();
        
        console.log("Clicked");
        
        axios.post("http://localhost:5001/login",
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
            document.getElementById("email").value="";
            document.getElementById("password").value="";
             clearstate();
            navigate('/home');
            }
          })
          .catch(err =>{
              console.log(err);
          })
        console.log("working");
       
    }
    // const formValidation = () =>{
    //     const emailErr={};
    //     const passwordErr={};
    //     let isValid=true;

    //     if(email === "" || (!email.includes('@')) || (!email.includes('gmail.com')))
    //     {
    //         emailErr.emailWrong = "Invalid Email"
    //         isValid=false;
    //     }
    //     if(password === "" ||  (!password.includes('@')) && (!password.includes('#')) )
    //     {
    //         passwordErr.passwordWrong = "Invalid password"
    //         isValid=false;
    //     }

    //     setemailErr(emailErr);
    //     setpasswordErr(passwordErr);
    //     return isValid;

    // }
   

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
            {/* {Object.keys(emailErr).map((key) =>{
                return <div style={{color:"red"}}>{emailErr[key]}</div>
            })} */}

               <TextField 
               id="password" 
               label="Password" 
               placeholder="Enter password" 
               type="password"  
               style={passwordStyle}
               value={password}
               onChange={(e) => {setpassword(e.target.value)}}
               fullWidth required/>
               {/* {Object.keys(passwordErr).map((key) =>{
                   return <div style={{color:"red"}}>{passwordErr[key]}</div>
               })} */}

               <Button 
               onClick={handleSubmit} 
               type="submit" 
               color="primary" 
               variant="contained" 
               style={btnstyle} 
               fullWidth>
                   {/* <Link  id="link" to="/home">Login</Link> */}
                   Login</Button>
            </Paper>
          
        </div>
    )
}


export default Login
