import express from "express";
import userRoute from "./users.routes";
import blogRoute from "./blog.routes";
import docrouter from "../docs";

const router = express.Router();

// Route
router.use("/users", userRoute)
router.use("/blog", blogRoute)
router.use("/docs", docrouter)





export default router;
