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
});

router.put("/:id", (req, res) => {
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
