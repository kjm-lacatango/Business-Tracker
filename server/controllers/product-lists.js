import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { db } from '../connectdb.js';
dotenv.config();

export const add = (req, res) => {
    const token = req.headers["x-access-token"];
    const {product, item, price, sold, sales, note} = req.body;

    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
        if (err) res.status(400).json({message: "Token not valid"});

        db.query("SELECT business FROM users WHERE id = ?", info.id, (err, result) => {
            if (err) console.log(err);

            const query = `INSERT INTO product_lists (business, product, item, price, sold, sales, updatedOn, note, userId) VALUES (?,?,?,?,?,?,?,?,?)`;
            db.query(query, [result[0].business, product, item, price, sold, sales, new Date(), note, info.id], (err, _) => {
                if (err) console.log(err);

                res.status(200).json({message: "Product list added successful"});
            });
        });
    });
}

export const getAll = (req, res) => {
    const token = req.headers["x-access-token"];

    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, _) => {
        if (err) res.status(400).json({message: "Token not valid"});

        const query = `SELECT pl.* FROM product_lists as pl JOIN users as u on(u.id = pl.userId) WHERE pl.business = u.business
            ORDER BY updatedOn DESC`;
        db.query(query, (err, result) => {
            if (err) console.log(err);

            res.status(200).json({result: result});
        });
    });
}

export const getById = (req, res) => {
    const token = req.headers["x-access-token"];
    const {id} = req.params;

    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, _) => {
        if (err) res.status(400).json({message: "Token not valid"});

        db.query("SELECT * FROM product_lists WHERE id=?", id, (err, result) => {
            if (err) console.log(err);

            res.status(200).json({result: result});
        })
    });
}

export const update = (req, res) => {
    const token = req.headers["x-access-token"];
    const {newProduct, newItem, newPrice, newSold, newSales, newNote} = req.body;
    const {id} = req.params;

    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, _) => {
        if (err) res.status(400).json({message: "Token not valid"});

        const query = `UPDATE product_lists SET product=?, item=?, price=?, sold=?, sales=?, updatedOn=?, note=? WHERE id=?`;
        db.query(query, [newProduct, newItem, newPrice, newSold, newSales, new Date(), newNote, id], (err, _) => {
            if (err) console.log(err);

            res.status(200).json({message: "Product list updated successful"});
        });
    });
}

export const remove = (req, res) => {
    const token = req.headers["x-access-token"];
    const {ids} = req.body;

    if (!token) res.status(400).json({message: "Not logged in"});

    jwt.verify(token, process.env.JWT_SECRET, (err, _) => {
        if (err) res.status(400).json({message: "Token not valid"});

        db.query("DELETE FROM product_lists WHERE id IN (?)", [ids], (err, _) => {
            if (err) console.log(err);

            res.status(200).json({message: "Product list deleted successful"});
        });
    });
}
