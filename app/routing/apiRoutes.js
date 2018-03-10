//Working on some methodology approach and logic with Chetan and Abdi 
//and learning a few things from Cheatan in the process

//linking to our "data" sorurce from friends.js
var friendsArray = require("../data/friends.js");

//allows us to export it to server.js
module.exports = function(app) {
  // API GET Request
  // Below code handles when users visits friends page and displays the stored objects there

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // API POST Request
  // Below code handles when a user submits a form and thus submits data to the server.
  app.post("/api/survey", function(req, res) {
    // req.body is available since we're using the body-parser middleware
var userResponse = req.body;
// console.log(JSON.stringify(userResponse));
var userScores = userResponse;
console.log(userScores);
var totalDiff = 50;
var bestMatch = friendsArray[0];

//Creating 2 for loops to go thru the friends in our friendsArray and compare their scores 
//wih the user scores
for (var i = 0; i < friendsArray.length; i++){
    var scoreDiff = 0;
    for (var j = 0; j < userScores.length; j++){
        scoreDiff = scoreDiff + Math.abs(friendsArray[i].scores[j] - userScores[j])
    }
    if (scoreDiff < totalDiff){
        totalDiff = scoreDiff;
        bestMatch = friendsArray[i];
    }
}
res.json(bestMatch);
console.log(bestMatch)
// console.log(totalDiff);
// console.log(scoreDiff);
  });
};

  
