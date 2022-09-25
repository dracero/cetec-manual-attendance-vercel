var express = require('express');
var router = express.Router();
var passport =  require('passport');
var multer = require('multer');

var {
  add_attendance,
  logout
} = require('../controllers/manual_attendance_controller.js');

const checkAuthenticated = (req, res, next) => {

  if (res.locals.authenticated) {
    return next()
  }
  
  res.status(401).end();
}

router.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONT_URL);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

router.get('/api/logout', logout);
router.post('/api/attendance', multer().none(), checkAuthenticated, add_attendance);

module.exports = router;
