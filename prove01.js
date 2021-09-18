const express = require("express");

const routes = require("./routes/prove/prove01/prove01routes");
const formRoutes = require("./routes/prove/prove01/routes");

const app = express();


app.use(routes.route);

app.use(formRoutes.route);

// app.use(routes.userRoute);

app.listen(3000);