import { User } from "../dbase/models";
import bcrypt from "bcrypt";
import { uploadToCloud } from "../helper/cloud";

// Create a new user
export const createUser = async (userData, file) => {
    try {
        // Check if the user already exists
        const existing = await User.findOne({ where: { email: userData.email } });
        if (existing) {
            console.log("User already exists with email:", userData.email);
            return { success: false, message: "Email already exists" };
        }

        // Upload the file to cloud if provided
        let result;
        if (file) {
            result = await uploadToCloud(file);
        }

        // Hash the user's password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(userData.password, salt);

        // Create the user in the database
        const newUser = await User.create({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: hashedPass,
            avatar: result?.secure_url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        });

        return { success: true, message: "User created successfully", user: newUser };
    } catch (error) {
        console.log("Service Error:", error);
        return { success: false, message: error.message };
    }
};


// get All users

export const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return { success: true, users };
    } catch (error) {
        console.log("Service Error:", error);
        return { success: false, message: error.message };
    }
};