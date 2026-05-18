const express = require("express");

const router = express.Router();

// GET /history
router.get("/", (req, res) => {
    res.json({
        message: "Ambil semua history berhasil"
    });
});

module.exports = router;