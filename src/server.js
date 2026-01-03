require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./auth.routes");
const quizRoutes = require("./quiz.routes");
const adminRoutes = require("./admin.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Quiz Bíblico ONLINE");
});

app.use("/auth", authRoutes);
app.use("/quiz", quizRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});

