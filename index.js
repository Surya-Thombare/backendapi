const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Api = require("./routes/data");
const posts = require('./routes/blogs')

const port = process.env.PORT || 3001;
const user = require("./routes/user/registerUser");
const health = require("./routes/health");

const InitiateMongoServer = require("./auth/db");

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", user);
InitiateMongoServer();

app.use("/", health);
app.use("/api", Api);
app.use("/api", posts);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`app is running on port ${port}`);
});
