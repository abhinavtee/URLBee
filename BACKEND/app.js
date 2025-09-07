import dotenv from "dotenv";
dotenv.config();
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

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://url-bee-t8ji.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (origin.endsWith(".vercel.app") || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cookie",
      "X-Requested-With",
      "Accept",
    ],
  })
);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/create", shortUrl);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
