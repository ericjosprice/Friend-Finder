var express = require("express");
var app = express();
var path = require("path");


var PORT =  process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get home.html when the domain is called
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));

});





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });