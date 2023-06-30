const express = require("express");
const { signIn, signUp, signOut } = require("../controllers/user.js");
// const {getUserDetails} = require("../controllers/user")

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
// router.get('/:id', getUserDetails)

module.exports = router;
