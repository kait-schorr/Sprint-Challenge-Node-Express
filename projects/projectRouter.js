const express = require("express");
const db = require("./projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  db
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem getting the projects from the server."
      });
    });
});

router.get("/:id", (req, res) => {
  db
    .get(req.params.id)
    .then(projects => {
      console.log("Projects: ", projects);
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem getting the project from the server."
      });
    });
});

router.get("/:id/actions", (req, res) => {
  db
    .getProjectActions(req.params.id)
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "There was a problem getting the project's actions from the server."
      });
    });
});

router.post("/", (req, res) => {
  if (req.body.name && req.body.description) {
    db
      .insert(req.body)
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was a problem posting the project to the server."
        });
      });
  } else {
    res.status(400).json({
      message: "You need to include a name and description in your submission."
    });
  }
});

router.put("/:id", (req, res) => {
  let updateKeys = Object.keys(req.body);
  let acceptedKeys = ["name", "description", "completed"];
  console.log("Update Keys: ", updateKeys);
  let invalidKeys = updateKeys.filter(
    key => !acceptedKeys.includes(key) //|| "description" || "completed");
  );
  let validKeys = updateKeys.filter(key => acceptedKeys.includes(key));
  console.log("Invalid Keys: ", invalidKeys);
  if (invalidKeys.length > 0) {
    res.status(400).json({ message: "You sent invalid data." });
  } else if (validKeys.length > 0) {
    db
      .update(req.params.id, req.body)
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was a problem updating the project on the server."
        });
      });
  } else {
    res.status(400).json({
      message:
        "Please update either the project name, description, or completion status. "
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
        message: "There was a problem deleting the project from the server."
      });
    });
});

module.exports = router;
