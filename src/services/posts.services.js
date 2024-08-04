import { User, Posts, Comments } from "../dbase/models";
import { uploadToCloud } from "../helper/cloud";

// Create a new post

export const createPosts = async (userId, postsData, file, res) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return { success: false, message: "User not found" };
        }
        const existing = await Posts.findOne({ where: { title: postsData.title } });
        if (existing) {
            return { success: false, message: "Title already exists" }
        }

        // Upload the file to cloud if provided
        let result;
        if (file) {
            result = await uploadToCloud(file, res);
        }

        // Create the post in the database
        const newPost = await Posts.create({
            title: postsData.title,
            description: postsData.description,
            category: postsData.category,
            avatar: result?.secure_url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            userId: user.id,
        });

        return { success: true, message: "Post created successfully", post: newPost };

    } catch (error) {
        console.log("Service error: ", error)
        return { success: false, message: "Failed To Create A Post", error }

    }
}

// get all posts

// get all posts
export const getAllPosts = async () => {
    try {
        const posts = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['avatar', 'firstName', 'lastName']
                },
                {
                    model: Comments,
                    include: [
                        {
                            model: User,
                            attributes: ['avatar', 'firstName', 'lastName']
                        }
                    ]
                }
            ],
            order: [["createdAt", "DESC"]],
        });

        return { success: true, message: "Posts retrieved successfully", posts };

    } catch (error) {
        console.log("Service error: ", error);
        return { success: false, message: "Failed To Retrieve Posts", error };
    }
}


// get post by id
export const getPost = async (postId) => {
    try {
        const post = await Posts.findByPk(postId, {
            include: [{
                model: User,
                attributes: ['avatar', 'firstName', 'lastName']
            }],
            order: [["createdAt", "DESC"]],
        });

        if (!post) {
            return { success: false, message: "No posts found" }
        }


        return { success: true, message: "Post retrieved successfully", post };

    } catch (error) {
        console.log("Service error: ", error)
        return { success: false, message: "Failed To Retrieve Post", error }

    }
}


// update post
export const updatedPost = async (userId, postId, postsData, file, res) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return { success: false, message: "User not found" };
        }
        const post = await Posts.findByPk(postId);
        if (!post) {
            return { success: false, message: "Post not found" };
        }

        // Upload the file to cloud if provided
        let result;
        if (file) {
            result = await uploadToCloud(file, res);
        }

        // Create the post in the database
        await Posts.update({
            title: postsData.title,
            description: postsData.description,
            category: postsData.category,
            avatar: result?.secure_url,
            userId: user.id,
        }, { where: { id: postId } }
        );

        return { success: true, message: "Post updated successfully" };

    } catch (error) {
        console.log("Service error: ", error)
        return { success: false, message: "Failed To Create A Post", error }

    }
}

// delete post
export const deletePost = async (postId) => {
    try {
        const post = await Posts.findByPk(postId);
        if (!post) {
            return { success: false, message: "Post not found" };
        }
        await Posts.destroy({ where: { id: postId } })
        return { success: true, message: "Post deleted successfully" };

    } catch (error) {
        console.log("Service Error:", error);
        return { success: false, message: error.message };
    }
}