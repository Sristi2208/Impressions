import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true })); // 30 mb as the images would be large in size
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // 30 mb as the images would be large in size
app.use(cors());

app.use("/posts", postRoutes);

app.get('/',(req, res) =>{
  res.send("Hello to Memories API")
})

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNTECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // to connect to our database, this returns a promise so to deal with it we'll add a .then
  .then(() =>
    //if our connection is successful
    app.listen(PORT, () => console.log(`Console running on port : ${PORT}`))
  )
  .catch((err) => console.log(err.message));

// mongoose.set("usefindOneAndUpdate", false); // makes sure we don't get any warnings in the console
