import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listendpoints from "express-list-endpoints";
const server = express();

const port = process.env.PORT || 3000;

// middlewares
server.use(cors());
server.use(express.json());

// routes

// errorHandlers

console.table(listendpoints(server));

mongoose.connect(process.env.CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
