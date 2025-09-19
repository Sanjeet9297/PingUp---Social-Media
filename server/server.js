import express from "express";
import cors from "cors";
import "dotenv/config";
import "./configs/db.js";
import { inngest, functions } from "./inngest/index.js";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

// ✅ Add CSP headers
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'", 
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'", 
      "style-src 'self' 'unsafe-inline'", 
      "img-src 'self' data: https:", 
      "font-src 'self' https:", 
      "connect-src 'self' https:", 
      "frame-src 'self' https:", 
    ].join("; ")
  );
  next();
});

app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Server is Live!");
});

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/user", userRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
