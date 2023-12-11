const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');



router.get('/',adminController.getAdminPage);

router.get('/add',adminController.addAdminData);


module.exports = router;