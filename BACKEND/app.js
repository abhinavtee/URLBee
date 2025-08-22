import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/mongo.config.js";
import authRoutes from "./src/routes/auth-routes.js";
import userRoutes from "./src/routes/user-routes.js";
import shortUrl from "./src/routes/short-url-route.js";
import { redirectFromShortUrl } from "./src/controller/short-url-controller.js";
import { errorHandler } from "./src/util/errorHandler.js";
import cors from "cors";
import { attachUser } from "./src/util/attachUser.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const allowedOrigins = [
  "http://localhost:3000", // local dev
  "http://localhost:5173", // Vite
  "https://url-bee.vercel.app", // ✅ no trailing slash
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/create", shortUrl);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  connectDB();
});
