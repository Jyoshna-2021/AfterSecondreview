const { QueryTypes } = require('sequelize');
const  db=require('../models');
const {Bookdetails,transcationdetails}=require ("../models");
var getbook = async (req, resp)=> {
    try{
        const getbooks= await Bookdetails.findAll();
        return resp.status(200).json(getbooks)
    
    }catch(e){
        console.log(e)
        return resp.status(500).send(e);
    }

}
var postbook= async(req,resp)=>{
    const {title,author,edition,publisher,isbn,genre,url,count}=req.body
    try{
    const getbooks= await Bookdetails.create( {title,author,edition,publisher,isbn,genre,url,count});
     return resp.status(200).json(getbooks)
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }

 var countdec= async(req,resp)=>{
    const BookId = req.params.BookId;
    const UserId = req.params.UserId;
    try{
        const transdetails=await transcationdetails.findOne({where:{UserId:UserId,BookId:BookId}})
        console.log(transcationdetails);
        if(transdetails===null){
        const count= await db.sequelize.query(`UPDATE Bookdetails SET count= count-1 WHERE BookId = ${BookId}`);
        
        
        return resp.status(200).json(count)
    }
    }
   
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }

 var countinc= async(req,resp)=>{
    var BookId = req.params.BookId;
    
    try{
        
        const count= await db.sequelize.query(`UPDATE Bookdetails SET count=count+1 WHERE BookId = ${BookId}`);


        return resp.status(200).json(count)
        //({ attributes: {exclude: ["createdAt", "updatedAt","address"]}})
    }
   
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }

  
 

 
 module.exports = {getbook,postbook,countdec,countinc}
