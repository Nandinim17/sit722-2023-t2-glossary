var express = require('express');
var router = express.Router();
var listofass = require('../Glossary/Data') 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DEVOPS GLOSSARY', list: listofass });
});

module.exports = router;
