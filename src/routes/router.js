var express = require('express');
var router = express.Router();
const { stripe_keys } = require('../config/api');
const { STRIPE_KEY_PUB, STRIPE_KEY_PRIV } = stripe_keys
const stripe = require("stripe")(STRIPE_KEY_PRIV);

router.get('/', function (req, res, next) {
  return res.render('index', {title: "Midterm"});
});

router.post('/v1/payment', function (req, res, next) {
  const userID = req.body.userID;
  return res.render('payment', {title: "Midterm", api_key:`${STRIPE_KEY_PUB}`, 
       data_name: "Demo Site", data_description: "Widget",
       val_1: 1000, val_2: 10000, val_3: 90000, user_id: userID})
});

router.post("/v1/charge", (req, res) => {
  stripe.customers.create({
    email: req.body.token.email,
    card: req.body.token.id
  })
  .then(customer =>
    stripe.charges.create({
      amount: req.body.charge.amount,
      description: "Sample Charge",
      currency: req.body.charge.currency,
      customer: customer.id
    }))
  .then(charge => {
    //{todo} integrar modelo pagamento (charge)
    res.status(200).send({status: "succeeded"});
  })
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({status: "failed"});
  });
});

router.post('/v1/home', function (req, res, next) {
  const stripeToken = 'ok';
  const stripeTokenType = 'k1';
  const stripeEmail = 'k25';
  const payValue = '100';
  
  res.render('home', {title: 'Payment Test', stripeToken: stripeToken,
              stripeTokenType: stripeTokenType, stripeEmail: stripeEmail,
              payValue: payValue});
});

module.exports = router;