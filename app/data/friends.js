// here we make our array of friends

// how to link aFriendsArray with apiRoutes.js?? post request is coming in from that file. But the data must be stored in aFriendsArray. do i use modules.exports



aFriendsArray = [{
        name: "Eric",
        imageURL: "https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg",
        scores: [5,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
        ],
        nScore: 14,
    },
    {
        name: "Shelby",
        imageURL: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ],
        nScore: 32,
    },
    {
        name: "julius",
        imageURL: "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        scores: [
            5,
            3,
            3,
            2,
            3,
            2,
            2,
            3,
            2,
            1
        ],
        nScore: 26,
    },
];

module.exports = aFriendsArray;

// not needed


// app.get("/:friend", function (req, res) {

//     res.send(aFriendsArray[0].name);

// });

// // Routes
// // ===========================================================
// app.get("/", function(req, res) {
//     res.send("Welcome to the Star Wars Page!");
//   });

//   app.get("/yoda", function(req, res) {
//     res.json(yoda);
//   });

//   app.get("/neo", function(req, res) {
//     res.json(neo);
//   });

//   app.get("/darthmaul", function(req, res) {
//     res.json(darthmaul);
//   });
//   app.get("/darthmaul", function(req, res) {
//     res.json(darthmaul);
//   });