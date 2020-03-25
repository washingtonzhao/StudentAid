require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const regionRouter = require("./routers/regionRouter");

const server = express();

mongoose.connect(encodeURI(process.env.MONGODB_URI), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

server.use(cors());
server.use(morgan("dev"));
server.use(bodyParser.json());

server.use("/regions", regionRouter);

server.listen(process.env.SERVER_PORT, () =>
  console.log(`Server ready. Listening at port ${process.env.SERVER_PORT}`)
);
