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

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://192.168.29.30:5173",
        "http://localhost:5000",
        "http://192.168.29.30:5000",
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    optionsSuccessStatus: 200
}));

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
app.listen(PORT, '0.0.0.0', () => {
    connectDB();
});
