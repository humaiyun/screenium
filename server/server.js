import dotenv from "dotenv"
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';


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


// app.use("/user", userRoutes);
// app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
    res.json(
        {
            message: "Server is running"
        }
    );
});

mongoose.connect(DB_STRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => app.listen(PORT, () => console.log(`Connected to MongoDB\nListening on port ${PORT}`)))
    .catch((err) => console.log(err.message));
