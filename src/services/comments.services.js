import { Comments, User, Posts } from "../dbase/models"


// create Comment
export const createComment = async (postId, userId, comment) => {
    try {
        const post = await Posts.findByPk(postId)
        if (!post) {
            return { success: false, message: "Post Not Found" }
        }
        const user = await User.findByPk(userId);
        if (!user) {
            return { success: false, message: "User not found" };
        }
        const newComment = await Comments.create({ postId: post.id, userId: user.id, text: comment.text })
        return { success: true, message: "Comment created successfully", comment: newComment }

    } catch (error) {
        console.log("Service error: ", error)
        return { success: false, message: "Service  error: ", error }

    }
}

// get all comments
export const getAllComments = async () => {
    try {
        const comments = await Comments.findAll({
            include: [{ model: User }],
            order: [["createdAt", "DESC"]],
        })
        return { success: true, message: "Comments Retrived successfully", comments }

    } catch (error) {
        console.log("Service error: ", error)
        return { success: false, message: "Service  error: ", error }
    }
}

// get single comment by id
export const getCommentById = async (id) => {
    try {

        const comment = await Comments.findByPk(id)
        if (!comment) {
            return { success: false, message: "Failed To Retrive Comment", comment }
        }
        return { success: true, message: "Comment Retrived successfully", comment }

    } catch (error) {
        console.log("Service error: ", error)
        return { success: false, message: "Service  error: ", error }
    }
}

// update comment by id

export const updatedComment = async (userId, postId, commentId, CommentsData) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return { success: false, message: "User not found" };
        }
        const comment = await Comments.findByPk(commentId);
        if (!comment) {
            return { success: false, message: "Comment not found" };
        }
        const post = await Posts.findByPk(postId)
        if (!post) {
            return { success: false, message: "Post Not Found" }
        }

        // Create the Comments in the database
        await Comments.update({
            text: CommentsData.text,
            userId: user.id,
            postId: post.id,
        }, { where: { id: commentId } }
        );

        return { success: true, message: "Comment updated successfully" };

    } catch (error) {
        console.log("Service error: ", error)
        return { success: false, message: "Failed To Create A Comment", error }

    }
}

// delete Comment
export const deleteComment = async (commentId) => {
    try {
        const comment = await Comments.findByPk(commentId);
        if (!comment) {
            return { success: false, message: "Comment not found" };
        }
        await Comments.destroy({ where: { id: commentId } })
        return { success: true, message: "Comment deleted successfully" };

    } catch (error) {
        console.log("Service Error:", error);
        return { success: false, message: error.message };
    }
}