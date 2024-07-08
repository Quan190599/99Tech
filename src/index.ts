import "./database";
import "dotenv/config";

import express from "express";
import cors from "cors";
import { test_ways_to_sum_to_n } from "./problem4";
import { userRoutes } from "./problem5/routes";

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3080;
app.use(cors({ origin: "*" }));
app.use(express.json());

// Problem 5: Service api
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Problem 4: Three ways to sum n numbers
const n = 5;
test_ways_to_sum_to_n(n);
