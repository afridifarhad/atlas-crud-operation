import express from "express";
import { addUser, deleteUser, getUser, getUsers, updateUser,  } from "../controller/userController.js";
const userRoutes = express.Router();

userRoutes.post("/addUser", addUser);
userRoutes.get("/allUsers", getUsers);
userRoutes.get("/singleUser/:id", getUser);
userRoutes.put("/updateUser/:id", updateUser)
userRoutes.delete("/deleteUsers/:id", deleteUser)

export default userRoutes;