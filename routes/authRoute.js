const express = require("express");
const { createUser, loginUser, getallUser, getaUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, updatedUser, saveAddress, updateUserCart } = require("../controller/userControl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logoutUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);

router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password", forgotPasswordToken)
router.post("/reset-password", resetPassword)


router.post("/cart", authMiddleware, updateUserCart)

router.get("/:id", authMiddleware, isAdmin, getaUser);

module.exports = router;
