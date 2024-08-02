const userDocs = {
    tags: [
        {
            name: "Users",
            description: "Operations related to Users entities",
        },
    ],
    paths: {
        // users 
        "/api/users": {
            get: {
                tags: ["Users"],
                summary: "Get All Users",
                description: "Get all users",
                responses: {
                    200: {
                        description: "All User Posts retrieved successfully",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            post: {
                tags: ["Users"],
                summary: "Create User",
                description: "Create a new user",
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    firstName: {
                                        type: "string",
                                    },
                                    lastName: {
                                        type: "string",
                                    },
                                    email: {
                                        type: "string",
                                    },
                                    avatar: {
                                        type: "string",
                                        format: "binary",
                                    },
                                    password: {
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
                        description: "New user created successfully",
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
        "/api/v1/users/auth": {
            post: {
                tags: ["Users"],
                summary: "User Login",
                description: "User login",
                requestBody: {
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        type: "string",
                                    },
                                    password: {
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
                        description: "User was logged in successfully",
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
        "/api/users/{id}": {
            get: {
                tags: ["Users"],
                summary: "Read User By ID",
                description: "Get a user by ID",
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
                        description: "User retrieved successfully",
                    },
                    404: {
                        description: "User not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            put: {
                tags: ["Users"],
                summary: "Update User",
                description: "Update an existing user",
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
                                    firstName: {
                                        type: "string",
                                    },
                                    lastName: {
                                        type: "string",
                                    },
                                    email: {
                                        type: "string",
                                    },
                                    avatar: {
                                        type: "string",
                                        format: "binary",
                                    },
                                    password: {
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
                        description: "User updated successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "User not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
            delete: {
                tags: ["Users"],
                summary: "Delete User",
                description: "Delete a user by ID",
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
                        description: "User deleted successfully",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "User not found",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            },
        },
    },
};

export default userDocs;
