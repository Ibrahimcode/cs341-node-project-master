//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

// const ta03Controller = require('../controllers/ta3.js')

// router.get('/', ta03Controller.getProducts)
module.exports = router;
