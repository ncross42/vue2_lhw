var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET api listing. */
router.get('/stories', function(req, res, next) {
  res.json([
    { writer: 'aaa', plot: 'AAA', upvotes: 10 },
    { writer: 'bbb', plot: 'BBB', upvotes: 15 },
    { writer: 'ccc', plot: 'CCC', upvotes: 12 },
    { writer: 'ddd', plot: 'DDD', upvotes: 17 },
  ]);
});

module.exports = router;
