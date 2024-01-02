const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createCategory, getallCategory, getCategory, deleteCategory, updateCategory } = require("../controller/categoryControl");
const router = express.Router();

router.get("/", authMiddleware, isAdmin, getallCategory); 
router.get("/:id", authMiddleware, isAdmin, getCategory); 
router.post("/", authMiddleware, isAdmin, createCategory); 
router.put("/:id", authMiddleware, isAdmin, updateCategory); 
router.delete("/:id", authMiddleware, isAdmin, deleteCategory); 


module.exports = router;