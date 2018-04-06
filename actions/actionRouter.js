const express = require("express");

const db = require("./actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.get().then(action => res.json(action));
});

router.get("/:id", (req, res) => {
  db.get(req.params.id).then(action => res.json(action));
});

module.exports = router;
