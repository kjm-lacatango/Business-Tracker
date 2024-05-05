import { db } from "../connectdb.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const add = (req, res) => {
    const token = req.headers["x-access-token"];
    const {product} = req.body;

    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
        if (err) res.status(400).json({message: "Token not valid"});

        db.query('SELECT business FROM users WHERE id = ?', info.id, (err, result) => {
            if (err) console.log(err);

            db.query("INSERT INTO products (product, userId, business) VALUES (?, ?, ?)", [product, info.id, result[0].business], (err, _) => {
                if (err) console.log(err);

                res.status(200).json({message: "Product added successful"});
            });
        });
    })
}

export const get = (req, res) => {
    const token = req.headers["x-access-token"];
    
    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
        if (err) res.status(400).json({message: "Token not valid"});

        const query = "SELECT p.* FROM products as p join users as u on(u.id = p.userId) where u.id = ? OR u.business = p.business" 
        db.query(query, info.id, (err, result) => {
            if (err) console.log(err);

            res.status(200).json({result: result});
        });
    });
}

export const edit = (req, res) => {
    const token = req.headers["x-access-token"];
    const {editedProduct} = req.body;
    const {id} = req.params;

    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
        if (err) res.status(400).json({message: "Token not valid"});

        db.query("UPDATE products SET product=? WHERE id =? AND userId=?", [editedProduct, id, info.id], (err, _) => {
            if (err) console.log(err);

            res.status(200).json({message: "Product updated successful"});
        });
    });
}

export const remove = (req, res) => {
    const token = req.headers["x-access-token"];
    const {id} = req.params;

    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
        if (err) res.status(400).json({message: "Token not valid"});

        db.query("DELETE FROM products WHERE id=? AND userId=?", [id, info.id], (err, _) => {
            if (err) console.log(err);

            res.status(200).json({message: "Product deleted successful"});
        });
    });
}
