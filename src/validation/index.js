import Joi from "joi"
// Validation schema for creating a new user
const userSchema = Joi.object({
    firstName: Joi.string().required().min(3).max(30),
    lastName: Joi.string().required().min(3).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4).max(50),
    avatar: Joi.string().optional(),
});
// Function to validate user creation
export const validateUser = (userData) => {
    return userSchema.validate(userData);
};