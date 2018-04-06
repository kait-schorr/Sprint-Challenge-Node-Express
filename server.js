const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const actionRouter = require("./actions/actionRouter");
const projectRouter = require("./projects/projectRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan());
server.use(express.json());

server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

const port = 5000;

server.listen(port, () => {
  console.log("API IS RUNNING");
});
