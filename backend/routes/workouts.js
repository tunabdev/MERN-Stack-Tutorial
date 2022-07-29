const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
//Get All Workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a single workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a wokout
router.patch("/:id", updateWorkout);

//*router sayesinde
// router.get("/hello", (req, res, next) => {
//   console.log("hello!!");
//   res.json({ mssg: "msgg" });
// });
module.exports = router;
