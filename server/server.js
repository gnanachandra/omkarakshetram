import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import { ErrorMiddleWare } from "./middleware/error.js";
import authRouter from "./routes/authRoute.js";
import eventRouter from "./routes/eventRoute.js";
import streamRouter from "./routes/streamRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ఓంకార క్షేత్రం" });
});

app.use("/api/auth", authRouter);
app.use("/api/event", eventRouter);
app.use("/api/stream", streamRouter);
app.use(ErrorMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
