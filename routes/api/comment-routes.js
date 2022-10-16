const router = require("express").Router();
// imported methods from controller
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").delete(removeComment);

//  /api/comments/:pizzaId/:commentId
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// /api/comments/:pizzaID/:commentId/:replyId
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
