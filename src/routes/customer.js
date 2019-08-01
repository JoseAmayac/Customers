const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();
router.get('/',customerController.listData);

router.post('/add',customerController.saveCustomer);

router.get('/delete/:id',customerController.delete);

router.get('/update/:id', customerController.edit);

router.post('/update/:id',customerController.update)
module.exports = router;