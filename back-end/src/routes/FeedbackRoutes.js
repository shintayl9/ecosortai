const express = require("express");

const router = express.Router();

// POST /feedback
router.post("/", (req, res) => {

   const { message } = req.body;

   res.json({
      success: true,
      feedback: message
   });

});

module.exports = router;