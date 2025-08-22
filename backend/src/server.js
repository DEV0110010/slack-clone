import express from "express";
import { ENV } from "./config/env.js";

const app = express();


app.get('/', (req, res) => {
  res.send("Hello World! 123456")});

  console.log("mongo URI:", ENV.MONGO_URI);
  


app.listen(ENV.PORT, () => {
  console.log(`Server running on port:`, ENV.PORT)});