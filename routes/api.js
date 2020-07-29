const router = require("express").Router();
const Workout = require("../models/workout")

const db = require("../models");

router.get("/api/workout", (req, res) => {
   Workout.find({})

      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;
  