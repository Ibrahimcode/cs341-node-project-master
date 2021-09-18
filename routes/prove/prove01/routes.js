const express = require("express");

const routes = express.Router();

const fs = require("fs");

const app = express();

routes.post("/create-user", (req, res, next) => {
  const body = [];
  
  
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  return req.on("end", () => {
   
    const parseBody = Buffer.concat(body).toString(); // we have to buffer our chunk before we can work with it
    console.log(parseBody); // log the user input to the console
    let message = parseBody.split("=")[1];
    console.log('1 ' + message)
    

    // const message = parseBody.replace("=", ":");
   
    message = message + "\n";
    

    fs.appendFile("./users.txt", message, (err) => {
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end(); // if this is not set the code below will also run and cause an error
    }); // write what the use input into a file
  });
});

module.exports.route = routes;
