import { validatePost } from "../validation";
import * as PostsService from "../services/posts.services";



// create post controller

export const createPost = async (req, res) => {
    const { error, value } = validatePost(req.body);
    const id = req.user.dataValues.id;

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const postResponse = await PostsService.createPosts(id, value, req.file, res);

        if (postResponse.success) {
            return res.status(201).json({
                status: "201",
                message: postResponse.message,
                data: postResponse.post,
            });
        } else {
            return res.status(400).json({
                status: "400",
                message: postResponse.message,
            });
        }
    } catch (error) {
        console.log("Controller error", error)
        return res.status(500).json({
            status: "500",
            message: "Internal server error",
            error: error.message,
        });
    }
};

// get all post

export const getAllPosts = async (req, res) => {
    try {
        const result = await PostsService.getAllPosts();

        if (result.success) {
            return res.status(200).json({
                status: "200",
                message: result.message,
                data: result.posts,
            });
        } else {
            return res.status(500).json({
                status: "500",
                message: result.message,
            });
        }
    } catch (error) {
        console.log("Controller error", error)
        return res.status(500).json({
            status: "500",
            message: "Internal server error",
            error: error.message,
        });
    }
};

// get post 

export const getPost = async (req, res) => {
    try {
        const { id } = req.params
        const result = await PostsService.getPost(id);

        if (result.success) {
            return res.status(200).json({
                status: "200",
                message: result.message,
                data: result.post,
            });
        } else {
            return res.status(500).json({
                status: "500",
                message: result.message,
            });
        }
    } catch (error) {
        console.log("Controller error", error)
        return res.status(500).json({
            status: "500",
            message: "Internal server error",
            error: error.message,
        });
    }
};

// update post
export const updatePost = async (req, res) => {
    const { error, value } = validatePost(req.body);
    const userId = req.user.dataValues.id;
    const { id } = req.params
    console.log("Conntroller Post Id", id)

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const postResponse = await PostsService.updatedPost(userId, id, value, req.file, res);

        if (postResponse.success) {
            return res.status(201).json({
                status: "201",
                message: postResponse.message,
            });
        } else {
            return res.status(400).json({
                status: "400",
                message: postResponse.message,
            });
        }
    } catch (error) {
        console.log("Controller error", error)
        return res.status(500).json({
            status: "500",
            message: "Internal server error",
            error: error.message,
        });
    }
};

// delete post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const result = await PostsService.deletePost(id)
        if (result.success) {
            return res.status(200).json({
                status: "200",
                message: result.message,
            });
        } else {
            return res.status(400).json({
                status: "400",
                message: result.message,
            });
        }
    } catch (error) {
        console.log("Controller error", error)
        return res.status(500).json({
            status: "500",
            message: "Internal server error",
            error: error.message,
        });
    }
}