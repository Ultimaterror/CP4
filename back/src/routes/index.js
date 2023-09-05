const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("here")
  res.status(200).json("coucou");
});

module.exports = router;
