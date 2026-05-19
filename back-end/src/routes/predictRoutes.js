const express = require("express");
const multer = require("multer");

const router = express.Router();

const { histories } = require("./historyRoutes");

// konfigurasi penyimpanan file
const storage = multer.diskStorage({

   destination: (req, file, cb) => {
      cb(null, "uploads/");
   },

   filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
   }

});

// middleware upload
const upload = multer({ storage });

// POST /predict
router.post(
   "/",
   upload.single("image"),
   (req, res) => {

      // validasi file
      if (!req.file) {
         return res.status(400).json({
            success: false,
            message: "Image wajib diupload"
         });
      }

      // data history baru
      const newHistory = {
         id: histories.length + 1,
         image: req.file.filename,
         category: "Organik",
         confidence: "95%"
      };

      // simpan history
      histories.push(newHistory);

      res.json({
         success: true,
         message: "Prediksi sampah berhasil",
         result: newHistory
      });

   }
);

module.exports = router;