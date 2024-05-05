import {db} from '../connectdb.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const login = (req, res) => {
    const {email, password, business, designation} = req.body;

    db.query("SELECT * FROM users WHERE email=?", email, (err, result) => {
        if (err) res.status(500).json({message: "Database Error"});

        if (result.length > 0) {
            const checkPassword = bcrypt.compareSync(password, result[0].password);
            if (checkPassword) {
                if (result[0].business !== business) {
                    res.json({message: "Business not found"});
                } else if (result[0].designation !== designation) {
                    res.json({message: "Incorrect designation"});
                } else {
                    const token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, {expiresIn: '1d'});
                    res.cookie("token", token, { httpOnly: true });
                    const {password, ...others} = result[0];
                    res.json({message: "Login Successful", result: others, token: token});
                }
            } else {
                res.json({message: "Incorrect Password"});
            }
        } else {
            res.json({message: "Email doesn't exist"});
        }
    });
}

export const register = (req, res) => {
    const {firstName, middleName, lastName, email, password, business, designation, age, gender} = req.body;

    db.query("SELECT * FROM users WHERE business=?", business, (err, result) => {
        if (err) console.log(err);

        const existingUser = result.find(user => user.designation.toLowerCase() === "others" 
            && user.firstName.toLowerCase() === firstName.toLowerCase()
            && user.firstName.toLowerCase() === firstName.toLowerCase()
            && user.lastName.toLowerCase() === lastName.toLowerCase()
            && user.email.toLowerCase() === email.toLowerCase()
            && user.age === age && user.gender === gender
        );
        const existingAdmin = result.find(user => user.designation.toLowerCase() === 'admin');

        if (result.length > 0 && designation === "Others" && existingUser) {
            res.status(400).json({message: "User already exists"});
        } else if (existingAdmin && designation.toLowerCase() === 'admin') {
            res.status(400).json({ message: 'Business already has an admin' });
        } else if (result.length === 0 && designation.toLowerCase() === "others") {
            res.status(400).json({message: "Invalid. Business doesn't have an admin."})
        } else {
            const query = "INSERT INTO users (firstName, middleName, lastName, email, password, business, designation, age, gender) VALUES (?,?,?,?,?,?,?,?,?)";
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);
            db.query(query, [firstName, middleName, lastName, email, hashPassword, business, designation, age, gender] , (err, _) => {
                if (err) console.log(err);

                const query = "SELECT * FROM users WHERE firstName=? AND email=? AND business=? AND designation=?";
                db.query(query, [firstName, email, business, designation], (err, result) => {
                    if (err) res.status(500).json({message: "Database Error"});

                    const token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, {expiresIn: '1d'});
                    res.cookie("token", token, { httpOnly: true });

                    const {password, ...others} = result[0];
                    res.status(200).json({message: "Register successful", result: others, token: token});
                });
            });
        }
    });
}

export const logOut = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({message: "Logout successful"});
}
