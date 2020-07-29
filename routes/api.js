const router = require("express").Router();
const Workout = require("../models/workout")

const db = require("../models");


// Route to create a workout 
  router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
// route to update a workout
  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        req.params.find,
   
      { $push: { exercises: req.body } }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // route set up to get the last workouts
  router.get("/api/workouts", (req, res) => {
    Workout.find({})
 
       .then(dbWorkout => {
         res.json(dbWorkout);
       })
       .catch(err => {
         res.status(400).json(err);
       });
   });

   // Using class mini project example for refrence was able to set a route to
    // fetch the data for the front end to make the charts
   router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7) 
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;
  