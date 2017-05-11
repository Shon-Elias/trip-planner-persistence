var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

router.get('/', function(req, res, next) {
  res.render('index.html')
});

router.get('/all', function(req, res, next){
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .then(function([hotels, restaurants, activities]){
    res.send({
      hotels: hotels,
      restaurants: restaurants,
      activities: activities
    })
  })
})
module.exports = router;
