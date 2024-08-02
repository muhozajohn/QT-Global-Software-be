const postDocs = {
    tags: [
        {
            name: "Posts",
            description: "Operations related to Posts entities",
        },
    ],
    paths: {
        // Posts 
        "/api/post": {
            get: {
                tags: ["Posts"],
                summary: "Get All Posts",
                description: "Get all Posts",
                responses: {
                    200: {
                        description: "All post Posts retrieved successfully",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            post: {
                tags: ["Posts"],
                summary: "Create post",
                description: "Create a new post",
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    title: {
                                        type: "string",
                                    },
                                    description: {
                                        type: "string",
                                    },
                                    category: {
                                        type: "string",
                                    },
                                    avatar: {
                                        type: "string",
                                        format: "binary",
                                    },
                                },
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    201: {
                        description: "New post created successfully",
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

        "/api/post/{id}": {
            get: {
                tags: ["Posts"],
                summary: "Read post By ID",
                description: "Get a post by ID",
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
                        description: "post retrieved successfully",
                    },
                    404: {
                        description: "post not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            put: {
                tags: ["Posts"],
                summary: "Update post",
                description: "Update an existing post",
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
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    title: {
                                        type: "string",
                                    },
                                    description: {
                                        type: "string",
                                    },
                                    category: {
                                        type: "string",
                                    },
                                    avatar: {
                                        type: "string",
                                        format: "binary",
                                    },
                                },
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    200: {
                        description: "post updated successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "post not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            delete: {
                tags: ["Posts"],
                summary: "Delete post",
                description: "Delete a post by ID",
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
                        description: "post deleted successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "post not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
        },
    },
};

export default postDocs;
