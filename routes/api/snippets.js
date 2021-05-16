const router = require("express").Router();
const snippetsController = require("../../controller/snippetsController");

router
  .route("/snippets")
  .post(snippetsController.create)
  .get(snippetsController.findAll);

router
  .route("/snippets/:id")
  .get(snippetsController.findById)
  .delete(snippetsController.remove)
  .put(snippetsController.update);

module.exports = router;
