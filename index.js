import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.routes.js"
import userRoute from "./route/user.route.js"

import cors from "cors"


const app = express();
app.use(cors())
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const dbURI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});



//Defining Routes
app.use("/book", bookRoute);
app.use("/users", userRoute);


app.use(cors({
  origin: [
     
        "http://localhost:5173",
        "https://project-bookstore-murex.vercel.app"

  ],   // or restrict later with your Vercel domain
  credentials: true
}));


app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`);
});
