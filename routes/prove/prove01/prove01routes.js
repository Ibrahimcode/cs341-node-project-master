const express = require("express");
const routes = express.Router();

const fs = require("fs");

const app = express();

routes.get("/", (req, res, next) => {
  //   console.log("In the greeting view");
  res.send(
    "<html><head><title>Users Greetings</title></head><body><h1>Hello! You are welcome.</h1><form action='/create-user' method='POST'><label for='userName' class='un-label'>Enter your user name</label><input type='text' class='un-input' name='username'><button type='submit' class='un-btn'>Submit</body></html>"
  );
});

routes.get("/users", (req, res, next) => {
  fs.readFile("./users.txt", (err, data) => {
    const userAray = data.toString().split("\n");

    res.write("<html>");
    res.write("<head><title>Users List</title></head>");
    res.write("<body>");
    res.write("<h2>Welcoming the following users:</h2>");
    res.write("<ul>");
    userAray.forEach((userName) => {
      // escape empty items with empty value
      if (userName != "") {
        res.write(`<li>${userName}</li>`);
      }
    });
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  });
});

module.exports.route = routes;
// module.exports = storeUser;