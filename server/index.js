import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./routes/user.js";
import itemRoute from "./routes/item.js";


const app = express();
dotenv.config();

//Constant
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json({limit: '50mb'}));

//Routes
//http://localhost:3002
app.use("/user", userRoute);
app.use("/item",itemRoute);

async function start() {
  try {
    await mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`);
    app.listen(PORT, () => console.log(`Server started ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

 start();
