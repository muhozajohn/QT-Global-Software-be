import express from "express"
import { createUser, getAllUsers } from "../controllers/users.controller"
import fileUpload from "../helper/multer"

const userRoute = express()
userRoute.post("/", fileUpload.single("avatar"), createUser)
userRoute.get("/", getAllUsers)



export default userRoute