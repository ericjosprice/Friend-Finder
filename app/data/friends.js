// here we make our array of friends

// how to link aFriendsArray with apiRoutes.js?? post request is coming in from that file. But the data must be stored in aFriendsArray. do i use modules.exports



aFriendsArray = [{
        name: "Eric",
        imageURL: "https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg",
        a1: 5,
        a2: 1,
        a3: 1,
        a4: 1,
        a5: 1,
        a6: 1,
    },
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
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
        ]
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