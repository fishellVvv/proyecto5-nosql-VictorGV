const express = require("express");
const connectDB = require("./src/utils/db");
const moviesRouter = require("./src/api/routes/movies.routes");

const PORT = 3000;

connectDB();

const server = express();

server.use(express.json());

server.use("/api/movies", moviesRouter);

server.use((req, res) => {
  return res.status(404).json({ message: "Endpoint not found" });
});

server.use((err, req, res) => {
  console.log(err);
  return res.status(500).json({ message: "Internal server error" });
});

server.listen(PORT, () => {
  console.log(`🛜  Server running in http://localhost:${PORT}`);
});
