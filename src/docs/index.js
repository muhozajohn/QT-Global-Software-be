import express from "express";
import { serve, setup } from "swagger-ui-express";
import userDocs from "./users.docs";
import postDocs from "./posts.docs";
const docrouter = express.Router();

const options = {
    openapi: "3.0.1",
    info: {
        title: "Welcome to the Software Developer position at QT Global Software API",
        version: "1.0.0",
        description: "Software Developer position at QT Global Software Challenge",
    },
    basePath: "/",
    security: [
        {
            bearerAuth: [],
        },
    ],
    tags: [
        ...userDocs.tags,
        ...postDocs.tags

    ],
    paths: {
        ...userDocs.paths,
        ...postDocs.paths

    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
};

docrouter.use("/", serve, setup(options));

export default docrouter;