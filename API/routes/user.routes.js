const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
//add admin record
router.post('/addUser',
    userController.addUser
);
//generate userid 
// router.get('/userid',userController.UserID);

router.get('/allUser',
    userController.allUser
);
router.post('/GetAccount',
    userController.GetAccount
);
 

//login User
router.post('/login',
    userController.login
);


module.exports = router;