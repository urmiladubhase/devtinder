  const express = require("express");
  const app = express();

  app.use("/test",(req , res ) => {
    res.send("welcome to server");
 
  } );

  app.listen(1234,()=>{
    console.log("listening to 1234");
  });