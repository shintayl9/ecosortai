const express = require("express");

const router = express.Router();

// POST /predict
router.post("/", (req, res) => {

    const { image } = req.body;

    res.json({
        success: true,
        message: "Prediksi sampah berhasil",
        result: {
            category: "Organik",
            confidence: "95%",
            image
        }
    });

});

module.exports = router;