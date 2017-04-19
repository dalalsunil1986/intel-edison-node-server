var express = require('express');
var mraa = require('mraa');
var router = express.Router();

// Set the Gpio and the direction
var led = new mraa.Gpio(12, true, true);
led.dir(mraa.DIR_OUT);

/* GET home page. */
router.get('/', function(req, res, next) {
  //Light up the Led on 14
  led.write(1);

  //Turn it off after 500ms
  setTimeout(function() {
    led.write(0);
  }, 500);
  
  res.render('index', { title: 'Edison + NodeJS' });
});

module.exports = router;
