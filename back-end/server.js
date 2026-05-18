const express = require("express");
const cors = require("cors");

const predictRoutes = require("./src/routes/predictRoutes");
const historyRoutes = require("./src/routes/historyRoutes");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

app.use("/history", historyRoutes);
app.use("/predict", predictRoutes);

// route test
app.get("/", (req, res) => {
    res.send("Back-End EcoSortAI berjalan");
});

// jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});