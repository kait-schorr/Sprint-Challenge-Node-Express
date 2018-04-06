const express = require("express");

const db = require("./actionModel");

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
});

router.put("/:id", (req, res) => {
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
