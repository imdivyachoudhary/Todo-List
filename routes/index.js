const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

router.get("/",homeController.home);
router.post("/create-todo-list-item",homeController.create);
router.post("/delete-item", homeController.delete);

module.exports = router;