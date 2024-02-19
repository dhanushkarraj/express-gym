const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port =  3000;

// packages for web-Socket
const http = require("http");
const server = http.createServer(app);

require("./app/config/db.config");
require("dotenv").config();

app.use(cors());

app.use(bodyParser.json());

// Routes !
require("./app/routes/user.routes")(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

module.exports=app
