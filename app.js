import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

config({
  path: "config.env",
});
const app = express();

//using middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// Importing & Using routes
import course from "./routes/courseRoutes.js";
app.use("/api/v1/", course);

// user Routes
import users from "./routes/userRoutes.js";
app.use("/api/v1/", users);

// Payment routes
import payment from "./routes/paymentRoute.js";
app.use("/api/v1/", payment);

// otherRoutes
import other from "./routes/otherRoutes.js";
app.use("/api/v1/", other);

app.use(ErrorMiddleware);


export default app;

