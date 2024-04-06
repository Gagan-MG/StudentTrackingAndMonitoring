import express from "express";
import cors from 'cors';
import { adminRoute } from "./Routes/AdminRoute.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth', adminRoute)

app.listen(3000, () => {
    console.log("server is running")
})