const apiRouter = require('express').Router();
const Day = require('../../models').Day;
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Promise = require('bluebird');

// console.log(router)

apiRouter.get('/api/days', function(req, res, next){
  Day.findAll()
  .then(function(data){
    res.send('I didnt work', data)
    // console.log('no data', data);
  }).catch(function(){
    // res.send('I didnt work')
  })
})

module.exports = apiRouter;
