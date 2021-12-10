var express = require("express");
const {sequelize}=require("./models");
const {getadmins,postadmin}=require("./controller/admintablecontroller");
//const { getuser, postuser } = require("./controller/usertablecontroller.js");
const {gettranscation,posttranscation,deleteBook,updateduedate}=require("./controller/booktranscationcontroller")
const { getbook, postbook,countinc,countdec } = require("./controller/bookdetailscontroller");
const app=express();
const cors=require('cors');
const signupcontrol = require('./controller/signupcontrol')

app.use(cors({
    origin:"*"
}));
app.use(express.json());

app.get("/admins",getadmins);
app.post("/admins",postadmin);
//app.get("/users",getuser);
//app.post("/users",postuser);
app.get("/transcation/:UserId",gettranscation);
app.post("/transcation",posttranscation)
app.delete("/transcation/:BookId/:UserId",deleteBook);
app.put("/transcation/:UserId/:BookId",updateduedate)
app.get("/books",getbook);
app.post("/books",postbook);
app.put("/books/:BookId/:UserId",countdec);
app.put("/books/:BookId",countinc);

app.post("/add", signupcontrol.addUser);
app.post("/login", signupcontrol.log)
app.get("/getUser/:email",signupcontrol.getUser)

const PORT=5001;
app.listen({port:PORT},async()=>
   {console.log(`server running ${PORT}`)
   try{
   await sequelize.authenticate();
   }
   catch(e){
       console.log(e);
   }
});