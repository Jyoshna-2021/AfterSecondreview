const { QueryTypes } = require('sequelize')
const  db=require('../models');
const {transcationdetails}=require ("../models");
var gettranscation = async (req, resp)=> {
    try{
        const UserId = req.params.UserId;
        const gettranscation= await transcationdetails.findAll({where:{UserId:UserId}});
        return resp.status(200).json(gettranscation)
    
    }catch(e){
        console.log(e) 
        return resp.status(500).send(e);
    }

}
var posttranscation= async(req,resp)=>{
    const {UserId,BookId,BookName,IssueDate,duedate,renewdate}=req.body;
    try{
        const validation=await transcationdetails.findOne({where:{UserId:UserId,BookId:BookId}})
        if(validation === null){
        console.log(validation)
        const gettranscation= await transcationdetails.create( {UserId,BookId,BookName,IssueDate,duedate,renewdate});
        return resp.status(200).json(gettranscation)}
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }
 var deleteBook = async (req, resp)=> {
   
    const Bookid = req.params.BookId;
    const userid = req.params.UserId;
    try{
        const vBook = await transcationdetails.findOne({where: {BookId: Bookid,UserId:userid}});
      
        await vBook.destroy();
        return resp.status(200).json({"message":"Reacord deleted"});
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}
 var updateduedate=async(req,resp)=>{
    const UserId = req.params.UserId;
    const BookId = req.params.BookId;
    try{
        const duedate= await db.sequelize.query(`UPDATE transcationdetails SET duedate= date_add(renewdate,INTERVAL 16 DAY) WHERE UserId= ${UserId} AND BookId=${BookId}`);

        return resp.status(200).json({"message":"renew sucessfully"});
     }
     catch(e){
         console.log(e);
         return resp.status(500).json({"message": e});
     }
}
 module.exports = {gettranscation,posttranscation,deleteBook,updateduedate}