import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";

//app config
const PORT = process.env.PORT || 3000;
const app = express();
await connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//api route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log("server is running on port" + PORT);
});
