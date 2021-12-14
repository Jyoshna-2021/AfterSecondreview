import React from 'react'
import Navigation from '../navigation/nav'
import './about.css'
import user1 from '../images/user1.png'


export default function About() {

    let userdetail =localStorage.getItem('email')
    userdetail= JSON.parse(userdetail)
    console.log(userdetail)
    
 return (
    <div className="wrapper">
      <Navigation/>
      <div className="container">
        <div className="profile-head">
          <img src={user1} alt="lamp" className="profile-img"/>
        </div>
        
        <div className="user-detail">
          <p><label>User Id: </label><span>{userdetail.logdata.userId}</span></p>
          <p><label>User Name: </label><span>{userdetail.logdata.username}</span></p>
          <p><label>Email: </label><span>{userdetail.logdata.email}</span></p>
          <p><label>Phone Number: </label><span>{userdetail.logdata.phoneNumber}</span></p>
        </div>
        
      </div>
        
    </div>
  )
}