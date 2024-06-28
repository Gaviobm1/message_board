const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/messageControllers");

/* GET home page. */
router.get("/", messageControllers.message_index);

router.get("/new", messageControllers.message_form);

router.get("/message/:id", messageControllers.see_message);

router.delete("/message/:id", messageControllers.delete_message);

router.post("/new", messageControllers.create_message);

module.exports = router;
