const express = require("express");
const { createProduct, getAllProduct, getaProduct, updateProduct, deleteProduct, addToWishlist, rating, uploadImages } = require("../controller/productControl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/create", createProduct);
router.get("/all", getAllProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rate", authMiddleware, rating);

router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array('images', 10), productImgResize, uploadImages);

router.get("/:id", getaProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;