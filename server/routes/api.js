const express = require('express');
const router = express.Router();

router.use('/pokemon', require('./pokemon'));

module.exports = router;
