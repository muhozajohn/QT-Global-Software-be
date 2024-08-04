const CommentsDocs = {
    tags: [
        {
            name: "Comments",
            description: "Operations related to Comments entities",
        },
    ],
    paths: {
        // Commentss
        "/api/comments": {
            get: {
                tags: ["Comments"],
                summary: "Get All Comments",
                description: "Get all Comments",
                responses: {
                    200: {
                        description: "All Comments retrieved successfully",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
        },

        "/api/comments/{id}": {
            get: {
                tags: ["Comments"],
                summary: "Read Comment By ID",
                description: "Get a Comment by ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Comments retrieved successfully",
                    },
                    404: {
                        description: "Comments not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            delete: {
                tags: ["Comments"],
                summary: "Delete Comment",
                description: "Delete a Comments by ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Comment deleted successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "Comments not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
        },
        "/api/comments/{postId}/comment": {
            post: {
                tags: ["Comments"],
                summary: "Create Comment",
                description: "Create a new Comment",
                parameters: [
                    {
                        name: "postId",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    text: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    201: {
                        description: "New Comments created successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
        },
        "/api/comments/{postId}/comment/{id}": {
            put: {
                tags: ["Comments"],
                summary: "Update Comment",
                description: "Update an existing Comment",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        name: "postId",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    text: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    200: {
                        description: "Comment updated successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "Comments not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
        },
    },
};

export default CommentsDocs;
