var express = require('express');
var router = express.Router();
const paymentController = require('../controllers/paymentController')

router.get('/', function (req, res, next) {
  return res.render('index', {title: "Midterm - Site"});
});

router.get('/v1/home', paymentController.credit);

router.post("/v1/charge", paymentController.charge);

router.post("/v1/query", paymentController.query);

module.exports = router;