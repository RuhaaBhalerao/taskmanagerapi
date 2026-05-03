const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db.js");

const authRoutes = require("./routes/auth.routes.js");
const taskRoutes = require("./routes/task.routes.js");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

const startServer = (port) => {
  const server = app.listen(port, () => console.log(`Server running on ${port}`));

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      startServer(port + 1);
      return;
    }

    throw err;
  });
};

startServer(Number(process.env.PORT) || 5000);
