const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));

Routes
const busRoutes = require("./routes/bus");
const rikshaRoutes = require("./routes/riksha");
const travellersRoutes = require("./routes/travellers");
const shopsRoutes = require("./routes/travellers");

const api = process.env.API_URL;

app.use(`${api}/bus`, busRoutes);
app.use(`${api}/riksha`, rikshaRoutes);
app.use(`${api}/travellers`, travellersRoutes);
app.use(`${api}/shops`, shopsRoutes);

//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "City_project_DB",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Server
app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
