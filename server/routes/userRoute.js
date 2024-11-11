import express from "express";
import { clerkWebhooks } from "../controllers/UserController.js";

const userRouter = express.Router();
//api endpoint: http://localhost:3001/api/user/webhooks
userRouter.post("/webhooks", clerkWebhooks); 
export default userRouter;
