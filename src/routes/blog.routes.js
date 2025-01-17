import express from 'express';
import { createPost, deletePost, getAllPosts, getPost, getPostByCategory, updatePost } from '../controllers/posts.controller';
import fileUpload from '../helper/multer';
import authMiddleware from '../middleware/authMiddleware';


const blogRoute = express.Router()
blogRoute.post("/", fileUpload.single("avatar"), authMiddleware, createPost)
blogRoute.get("/", getAllPosts)
blogRoute.get("/:id", getPost)
blogRoute.get("/:category/category", getPostByCategory)
blogRoute.put("/:id", fileUpload.single("avatar"), authMiddleware, updatePost)
blogRoute.delete("/:id", deletePost)


export default blogRoute