const express = require("express");

const router = express.Router();

// tempat simpan history sementara
const histories = [];

// GET /history
router.get("/", (req, res) => {

   res.json({
      success: true,
      data: histories
   });

});

// DELETE /history/:id
router.delete("/:id", (req, res) => {

   const { id } = req.params;

   const index = histories.findIndex(
      (item) => item.id == id
   );

   if (index === -1) {
      return res.status(404).json({
         success: false,
         message: "History tidak ditemukan"
      });
   }

   histories.splice(index, 1);

   res.json({
      success: true,
      message: `History ${id} berhasil dihapus`
   });

});

module.exports = {
   router,
   histories
};