import express from "express";
import {
  addInventaris,
  updateInventaris,
  deleteInventaris,
  getInventarisById,
  getAllInventaris,
} from "../controllers/inventaris.controller.js";
import { authorize } from "../controllers/auth.controller.js";
// import { authorize } from "../controllers/auth.controller.js";

const app = express();
app.use(express.json());

app.get("/",authorize,  getAllInventaris);

app.get("/:id", authorize,getInventarisById);

app.post("/", authorize, addInventaris);

app.put("/:id",updateInventaris);  

app.delete("/:id", authorize, deleteInventaris);  

export default app;
