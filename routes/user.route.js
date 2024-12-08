import express from "express";
import {
  addUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
} from "../controllers/user.controller.js";
import { authorize } from "../controllers/auth.controller.js";

const app = express();

app.use(express.json());

app.get("/",  getAllUsers);

app.get("/:id",  getUserById);

app.post("/", addUser);

app.put("/:id",  updateUser);  

app.delete("/:id",  deleteUser);

export default app;
