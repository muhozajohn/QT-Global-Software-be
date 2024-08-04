import { validateComment } from "../validation";
import * as commentsService from "../services/comments.services";

export const createComment = async (req, res) => {
    const { error, value } = validateComment(req.body);
    const userId = req.user.dataValues.id;
    const { postId } = req.params

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const postResponse = await commentsService.createComment(postId, userId, value);

        if (postResponse.success) {
            return res.status(201).json({
                status: "201",
                message: postResponse.message,
                data: postResponse.comment,
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



export const getAllComment = async (req, res) => {
    try {
        const result = await commentsService.getAllComments();

        if (result.success) {
            return res.status(200).json({
                status: "200",
                message: result.message,
                data: result.comments,
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

export const getComment = async (req, res) => {
    try {
        const { id } = req.params
        const result = await commentsService.getCommentById(id);

        if (result.success) {
            return res.status(200).json({
                status: "200",
                message: result.message,
                data: result.comment,
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

// update comment
export const updateComment = async (req, res) => {
    const { error, value } = validateComment(req.body);
    const userId = req.user.dataValues.id;
    const { id, postId } = req.params

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const postResponse = await commentsService.updatedComment(userId, postId, id, value);

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

// delete comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params
        const result = await commentsService.deleteComment(id)
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