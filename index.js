require("dotenv").config();
const mongoose = require("mongoose");
const app = require("express")();

var bodyParser = require("body-parser");
// console.log(process.env.DEV_STRIPE_SKEY);
var cors = require("cors");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const routes = require("./src/routes");
app.use("/", routes);

mongoose.connect("mongodb://localhost:27017/example", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  console.error("❌ Error", req.originalUrl);
  res.send("Error");
});

let port = 3022;

if (process.env.PORT) {
  port = process.env.PORT;
}
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server ready on http://localhost:${port}`);
});
