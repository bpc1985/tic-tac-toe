import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/api";

const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(cors(options));
app.use(express.json());

app.use(apiRouter);

app.all("*", async (req, res) => {
  throw new Error("Route not found");
});

app.listen(4000, () => {
  console.log("Listening server on port 4000!");
});
