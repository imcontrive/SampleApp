var express = require('express');
var router = express.Router();


router.get('/', (req,res) => {
  res.render('index');
})

router.get('/about', (req,res) => {
  res.json({name: "shubham"})
})

router.get('/contact', (req,res) => {
  res.render('contact')
})

router.post('/contact', (req,res) => {
  res.json(req.body)
})

router.put('/contact', UserController); 


module.exports = router;