const _ = require("lodash");
const express = require("express");

const db = require("./actionModel");
const projectDb = require("../projects/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  db
    .get()
    .then(action => res.json(action))
    .catch(err => {
      res.status(500).json({
        message: "There was a problem getting the actions from the server."
      });
    });
});

router.get("/:id", (req, res) => {
  db
    .get(req.params.id)
    .then(action => res.json(action))
    .catch(err => {
      res.status(500).json({
        message: "There was a problem getting the action from the server."
      });
    });
});

router.post("/", (req, res) => {
  if (
    _.difference(["project_id", "description", "notes"], Object.keys(req.body))
      .length < 1
  ) {
    projectDb
      .get(req.body.project_id)
      .then(response => {
        db
          .insert(req.body)
          .then(action => {
            res.json(action);
          })
          .catch(err => {
            res.status(500).json({
              message: "There was a problem posting the action to the server."
            });
          });
      })
      .catch(err => {
        console.log("Ya done goofed");
        res.status(400).json({ message: "There is no project with that ID." });
      });

    if (projectDb.get(req.body.project_id) !== null) {
    } else {
      res.status(400).json("Your submitted project id doesn't exist.");
    }
  } else {
    res.status(400).json({
      message:
        "You submitted invalid data, please check your keys and try again."
    });
  }
});

router.put("/:id", (req, res) => {
  if (req.body.project_id) {
    db
      .update(req.params.id, req.body)
      .then(action => {
        res.json(action);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was a problem updating the action on the server."
        });
      });
  }
});

router.delete("/:id", (req, res) => {
  db
    .remove(req.params.id)
    .then(count => {
      res.json(count);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem deleting the action from the server."
      });
    });
});

module.exports = router;
