const express = require("express");
const db = require("./projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.get().then(projects => {
    res.json(projects);
  });
});

router.get("/:id", (req, res) => {
  db.get(req.params.id).then(projects => {
    res.json(projects);
  });
});

router.post("/", (req, res) => {
  db.insert(req.body).then(project => {
    res.json(project);
  });
});

module.exports = router;
