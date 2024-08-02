import Joi from "joi"

const userSchema = Joi.object({
    firstName: Joi.string().required().min(3).max(30),
    lastName: Joi.string().required().min(3).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4).max(50),
    avatar: Joi.string().optional(),
});

export const validateUser = (userData) => {
    return userSchema.validate(userData);
};
const userloginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4).max(50),
});

export const validateUserLogin = (userData) => {
    return userloginSchema.validate(userData);
};

const postSchema = Joi.object({
    title: Joi.string().required().min(3),
    description: Joi.string().required().min(3),
    category: Joi.string().required(),
    avatar: Joi.string().optional(),
});

export const validatePost = (postData) => {
    return postSchema.validate(postData);
};