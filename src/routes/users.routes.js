import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/users.controller"
import fileUpload from "../helper/multer"

const userRoute = express()
userRoute.post("/", fileUpload.single("avatar"), createUser)
userRoute.get("/", getAllUsers)
userRoute.get("/:id", getUserById)
userRoute.put("/:id", fileUpload.single("avatar"), updateUser)
userRoute.delete("/:id", deleteUser)



export default userRoute