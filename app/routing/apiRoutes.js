//to do

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
require("../data/friends.js");
//==========to do===============

module.exports = function (app) {
    console.log("apiRoutes.js file is connected");

    app.get("/api/:friends", function (req, res) {
        res.json(aFriendsArray);
    });

    // when post requests come to /api/friends, posted objects are pushed into the initialized array
    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        //add logic to sum response and match submitter with someone from the friends object array, as per step 4b

        // //loop through aFriends to get the array index where req.params.character lives
        // var friend = req.params.character;

        // display particular star wars character
        // // What does this route do?
        // app.get("/api/characters/:character", function(req, res) {
        //     // What does this code do?
        //     var chosen = req.params.character;
        //     console.log(chosen);

        //     // What does this code do?
        //     for (var i = 0; i < characters.length; i++) {
        //       if (chosen === characters[i].routeName) {
        //         return res.json(characters[i]);
        //       }
        //     }

        //     // What does this code do?
        //     return res.send("No character found");
        //   });
        console.log(newFriend);

        aFriendsArray.push(newFriend);

        res.json(newFriend);
    });

}


// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

// var friends = [{
//     "name": "Ahmed",
//     "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores": [
//         5,
//         1,
//         4,
//         4,
//         5,
//         1,
//         2,
//         5,
//         4,
//         1
//     ]
// }, ]