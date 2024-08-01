import { validateUser } from "../validation";
import * as UserService from "../services/users.services";

// createUser controller
export const createUser = async (req, res) => {
    const { error, value } = validateUser(req.body);


    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const userResponse = await UserService.createUser(value, req.file);

        // Log the user response
        if (userResponse.success) {
            return res.status(201).json({
                status: "201",
                message: userResponse.message,
                data: userResponse.user,
            });
        } else {
            return res.status(400).json({
                status: "400",
                message: userResponse.message,
            });
        }
    } catch (error) {
        console.log("Controller Error:", error);
        return res.status(500).json({
            status: "500",
            message: "Failed to Create Account",
            error: error.message,
        });
    }
};


// get allusers

export const getAllUsers = async (req, res) => {
    try {
        const result = await UserService.getAllUsers();

        if (result.success && result.users.length > 0) {
            return res.status(200).json({
                status: "200",
                message: "Users retrieved successfully",
                data: result.users,
            });
        } else if (result.success && result.users.length === 0) {
            return res.status(404).json({
                status: "404",
                message: "No users found",
            });
        } else {
            return res.status(500).json({
                status: "500",
                message: result.message,
            });
        }
    } catch (error) {
        console.log("Controller Error:", error);
        return res.status(500).json({
            status: "500",
            message: "Failed to retrieve users",
            error: error.message,
        });
    }
};