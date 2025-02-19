require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// app.use("/api", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on Port: ${process.env.PORT}`)
);
