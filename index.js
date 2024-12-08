import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import inventarisRoute from "./routes/inventaris.route.js";
import peminjamanRoute from "./routes/peminjaman.route.js";
import authRoute from "./routes/auth.route.js";


const app = express();


dotenv.config();
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/inventory", inventarisRoute);
app.use("/inventory", peminjamanRoute);
app.use('/api/auth', authRoute)



app.listen(process.env.APP_PORT, () => {
  console.log("server run on port " + process.env.APP_PORT);
});


