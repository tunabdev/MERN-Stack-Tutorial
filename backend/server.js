require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//!routes
// app.get("/", (req, res) => {
//   res.json({
//     mssg: "Welcome Home!!",
//   });
// });
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then((data) => {
    console.log("connected !!");
  })
  .catch((err) => {});
//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
