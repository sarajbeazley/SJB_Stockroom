const express = require ("express");
const { uploadDashboardData, uploadImage}  = require("../controllers/admin.js")

const router = express.Router();

router.post("/admin", uploadDashboardData)
router.post("/admin", uploadImage)

module.exports = router;