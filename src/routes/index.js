import express from "express";
import userRoute from "./users.routes";
import blogRoute from "./blog.routes";
import docrouter from "../docs";
import commentRoute from "./comments.routes";

const router = express.Router();

// Route
router.use("/users", userRoute)
router.use("/post", blogRoute)
router.use("/docs", docrouter)
router.use("/comments", commentRoute)





export default router;
