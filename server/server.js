import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';

import connectDb from "./mongodb/connect.js";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.SERVER_PORT;
const DB_STRING = process.env.MONGODB_CONNECTION_STRING;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true
}));
app.use(cookieParser());

app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

const startServer = async () => {
    try {
        connectDb(DB_STRING);
        app.listen(PORT, () => console.log(`Server live - http://localhost:${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

startServer();


