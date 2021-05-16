const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/signup")
    .post(userController.create);

// router.route("/login")
//     .post(userController.create);


module.exports = router; 


