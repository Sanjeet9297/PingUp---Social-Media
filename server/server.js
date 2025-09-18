import express from "express";
import cors from "cors";
import "dotenv/config";
import "./configs/db.js";
import {inngest,functions} from './inngest/index.js'
import {serve} from 'inngest/express'

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is Live!");
});
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
