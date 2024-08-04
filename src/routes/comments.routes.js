import express from 'express';
import fileUpload from '../helper/multer';
import authMiddleware from '../middleware/authMiddleware';
import { createComment, deleteComment, getAllComment, getComment, updateComment } from '../controllers/comments.controller';


const commentRoute = express.Router()
commentRoute.post("/:postId/comment", fileUpload.single("files"), authMiddleware, createComment)
commentRoute.get("/", getAllComment)
commentRoute.get("/:id", getComment)
commentRoute.put("/:postId/comment/:id", fileUpload.single("files"), authMiddleware, updateComment)
commentRoute.delete("/:id", deleteComment)


export default commentRoute