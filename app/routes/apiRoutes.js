// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var path = require("path");
var friends = require("../data/friends.js");
module.exports = function(app) {


app.get("/api/friends", function(req, res) {
  res.json(friends);
});

//   app.post("/friends", function(req, res) {

//     var userInput = req.body;
//     //console.log('userInput = ' + JSON.stringify(userInput));
//     var userResponse = userInput.scores;
//     friends.push(userInput);
// ////////////////////////////////////////////////
//         // var matchName = '';
//         // var matchImage = '';
//         // var totalDifference = 10000; 

        
//         // for (var i = 0; i < friends.length; i++) {
//         //     // console.log('friend = ' + JSON.stringify(friends[i]));

//         //     // Compute differenes for each question
//         //     var diff = 0;
//         //     for (var j = 0; j < userResponses.length; j++) {
//         //         diff += Math.abs(friends[i].scores[j] - userResponses[j]);
//         //     }
           

           
//         //     if (diff < totalDifference) {
           
//         //         totalDifference = diff;
//         //         matchName = friends[i].name;
//         //         matchImage = friends[i].photo;
//         //     }
//         // }

//         // // Add new user
//         // friends.push(userInput);

        
//         // res.json({status: 'OK', matchName: matchName, matchImage: matchImage});


//    });

  };
   