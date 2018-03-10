// DEPENDENCIES
var path = require("path");

//enables us to export it to server.js
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
 // the user is shown an HTML page of content
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
 // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};