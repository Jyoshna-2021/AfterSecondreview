var express = require("express");
const {sequelize}=require("./models");

const {getadmins,postadmin}=require("./controller/admintablecontroller");

const {gettranscation,posttranscation,deleteBook,updateduedate}=require("./controller/booktranscationcontroller")

const { getbook, postbook,countinc,countdec } = require("./controller/bookdetailscontroller");

const app=express();

const cors=require('cors');

const signupcontrol = require('./controller/signupcontrol')

const PORT=process.env.PORT || 7000;  // setup the server port

app.use(cors({
    origin:"*"
}));
app.use(express.json());

app.get("/admins",getadmins);
app.post("/admins",postadmin);

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

// listen to the port
app.listen(PORT,async()=>
   {console.log(`server running ${PORT}`)
   try{
   await sequelize.authenticate();
   }
   catch(e){
       console.log(e);
   }
});