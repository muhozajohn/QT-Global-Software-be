import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";

dotenv.config();
const app = express();

// Middleware for logging requests

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/api", router);


app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    author: "John Muhoza",
    message: "Qt Challenge API",
  });
});


const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});