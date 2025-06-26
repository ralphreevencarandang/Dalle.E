import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import postRoutes from "../src/routes/postRoutes.js";
import dalleRoutes from "../src/routes/dalleRoutes.js";
// allow us to pull the environmental variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

await connectDB();
app.use(cors());

app.use(
  express.json()
);

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("Express App");
});

app.listen(PORT, (req, res) => {
  console.log(`This server is running in http://localhost:${PORT}`);
});
