import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../mongodb/models/users.js";

export const signup = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body);
        
    try {
        const existingUser = await User.findOne({ username }) || await User.findOne({ email });

        if(existingUser) return res.status(404).json({ message: "User already exists" });
        if(password !== confirmPassword) return res.status(404).json({ message: "Passwords do not match" });

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ username, email, password: hashedPassword });

        const token = jwt.sign(
            {
                username: result.username,
                email: result.email,
                id: result._id,
                type: result.userType
            },
                process.env.JWT_SECRET_KEY, 
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({ message: "Account created successfully", result, token })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }

}