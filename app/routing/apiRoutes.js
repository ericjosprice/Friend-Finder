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
        var oNewFriend = req.body;
        var aResponses = oNewFriend.scores;
        var nScore = 0;

        //add logic to sum response and match submitter with someone from the friends object array, as per step 4b
        // console.log(oNewFriend);
        // console.log("aScore: ");
        // console.log(oNewFriend.scores);
        for (var i = 0; i < aResponses.length; i++) {
            nScore += parseInt(aResponses[i]);
        }
        oNewFriend.nScore = nScore;

        //=================================

        // Note the code here. Our "server" will respond to a user"s survey result
        // Then compare those results against every user in the database.
        // It will then calculate the difference between each of the numbers and the user"s numbers.
        // It will then choose the user with the least differences as the "best friend match."
        // In the case of multiple users with the same result it will choose the first match.
        // After the test, it will push the user to the database.

        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options
        var bestMatch = {
            name: "",
            imageURL: "",
            friendDifference: 0
        };

        // Here we take the result of the user"s survey POST and parse it.
        // EJP:: this is oNewfriend var userData = req.body;
        //EJP:: this is aResponses  var userScores = userData.scores;

        // This variable will calculate the difference between the user"s scores and the scores of
        // each user in the database
        var totalDifference = 0;

        // Here we loop through all the friend possibilities in the database.
        for (var i = 0; i < aFriendsArray.length; i++) {

            console.log(aFriendsArray[i].name);
            totalDifference = 0;

            // We then loop through all the scores of each friend
            for (var j = 0; j < aFriendsArray[i].scores[j]; j++) {

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(aResponses[j]) - parseInt(aFriendsArray[i].scores[j]));

                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = aFriendsArray[i].name;
                    bestMatch.imageURL = aFriendsArray[i].imageURL;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).      
        aFriendsArray.unshift(oNewFriend);
        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);


        // =============================================

    });

}