const express = require("express");

const router = express.Router();
const ProtudosController = require("./controllers/ProtudosController");
const CommentController = require("./controllers/CommentController");

router.get("/produtos", ProtudosController.index);
router.get("/produtos/types", ProtudosController.indexType);
router.get("/produtos/:id", ProtudosController.show);
router.get("/produtos/:id/comentarios", CommentController.show);

module.exports = router;
