const express = require('express');
const router = express.Router();
const commonSDCController = require('../controller/commonSDC.controller');
//add admin record
router.get('/state',
commonSDCController.state
);
router.get('/district/:Id',
commonSDCController.district
);
router.get('/city/:Id',
commonSDCController.city
);
 
router.get('/CurrentLocation',
commonSDCController.CurrentLocation
);
 
 

module.exports = router;