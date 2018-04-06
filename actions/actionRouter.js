const express = require("express");

const db = require("./actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.get().then(action => res.json(action));
});

router.get("/:id", (req, res) => {
  db.get(req.params.id).then(action => res.json(action));
});

router.post("/", (req, res) => {
  db.insert(req.body).then(action => {
    res.json(action);
  });
});

router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body).then(action => {
    res.json(action);
  });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id).then(count => {
    res.json(count);
  });
});

module.exports = router;
