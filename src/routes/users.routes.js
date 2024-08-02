import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, loginUser, updateUser } from "../controllers/users.controller"
import fileUpload from "../helper/multer"

const userRoute = express()
userRoute.post("/", fileUpload.single("avatar"), createUser)
userRoute.post("/auth", fileUpload.single("avatar"), loginUser)
userRoute.get("/", getAllUsers)
userRoute.get("/:id", getUserById)
userRoute.put("/:id", fileUpload.single("avatar"), updateUser)
userRoute.delete("/:id", deleteUser)



export default userRoute