const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', dataController.getData);
router.get('/:id', dataController.getDataById);

module.exports = router;
