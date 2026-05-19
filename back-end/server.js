const express = require("express");
const cors = require("cors");

const predictRoutes = require("./src/routes/predictRoutes");
const { router: historyRoutes } = require("./src/routes/historyRoutes");
const feedbackRoutes = require("./src/routes/feedbackRoutes");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/history", historyRoutes);
app.use("/predict", predictRoutes);
app.use("/feedback", feedbackRoutes);

// route test
app.get("/", (req, res) => {
    res.send("Back-End EcoSortAI berjalan");
});

// jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});