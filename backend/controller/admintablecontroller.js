const {Admintable, Sequelize,usertable,BookTranscation} = require ("../models");

const db = require("../models");


var getadmins = async (req, resp)=> {
    try{
        const adminsget= await Admintable.findAll();
        return resp.status(200).json(adminsget)
    
    }catch(e){
        console.log(e)
        return resp.status(500).send(e);
    }

}
var postadmin = async(req,resp)=>{
    const {UserId,emailid,password}=req.body;
    try{
    const admins= await Admintable.create( {UserId,emailid,password});
    console.log(admins);
     return resp.status(200).json(admins)
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }


module.exports = {getadmins,postadmin}