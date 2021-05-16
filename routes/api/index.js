const router = require("express").Router();
const userRoutes = require("./user");
const snippetsRoutes = require("./snippets");

router.use("/users", userRoutes);

router.use("/gary", snippetsRoutes);

module.exports = router;
