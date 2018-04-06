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

router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body).then(project => {
    res.json(project);
  });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id).then(count => {
    res.json(count);
  });
});

module.exports = router;
