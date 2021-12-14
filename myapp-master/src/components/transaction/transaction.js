  import React,{useState,useEffect} from 'react'
  
  import './transaction.css';
import Navigation from '../navigation/nav';

  
 const Transaction = ()=>{
   const axios = require('axios');
   const[booktranscation,setbooktranscation]=useState([]);

   const BASE_URL = process.env.REACT_APP_KEY;
    

  let userdetails= localStorage.getItem('email')
  userdetails= JSON.parse(userdetails)
  
 const getbookTransaction = async()=>{
   try{
     const transdata = await axios.get(`${BASE_URL}/transcation/${userdetails.logdata.userId}`);
 //console.log(data.data);
 setbooktranscation(transdata.data);
 }catch(e){
   console.log(e);
 }
 };
 useEffect(()=>{
   getbookTransaction();
 },[]);
 
 const renewrow =(UserId,BookId) =>{
   axios.put(`${BASE_URL}/transcation/${UserId}/${BookId}`,{
     

   })
   .then((response)=>{
     alert(response.data.message)
   })
   
  }

 const deleterow = async(BookId,UserId) => {
  await axios.delete(`${BASE_URL}/transcation/${BookId}/${UserId}`).then((response) => {
    alert(response.data.message)
    setbooktranscation(
      booktranscation.filter((item) => {
        return item.BookId != BookId;
      })
    );
  });

  await axios.put(`${BASE_URL}/books/${BookId}`,{
        })
  
}
   return(
  <div className="transaction">
    <Navigation/>
      <h2>Transaction details</h2>
      <table id="heading" className="tscTable">
      <thead>
       <tr>
          
          <th> BookId </th>
          <th>BookName</th>
          <th>IssueDate</th>
           <th>duedate</th>
          <th>renewdate</th>
          <th>return</th>
          <th>renew</th>
        </tr>
      </thead>
      <tbody>
      {booktranscation.map((item)=>{
      return(
        <tr>
            <td>{item.BookId} </td>
            <td>{item.BookName} </td>
            <td>{item.IssueDate}</td>
            <td> {item.duedate}</td>
            <td> {item.renewdate}</td>
            <td> <button onClick={()=>{deleterow(item.BookId,item.UserId)}}>return</button></td>
            <td> <button onClick={()=>{renewrow(item.UserId,item.BookId)}}>renew</button></td>
        </tr>)
        })}
        </tbody>
      </table>
      </div>
      
   );
};
 export default Transaction;
 
 
