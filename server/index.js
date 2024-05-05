import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import path from 'path';
import authRouter from './routes/auth.js';
import productNamesRouter from './routes/product-names.js';
import productListRouter from './routes/product-lists.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(cors({
    origin: ["http://localhost:4200"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    fileName: (req, file, cb) => {
        cb(null, file.fileName + "_" + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.use("/auth", authRouter);
app.use("/products", productNamesRouter);
app.use("/product-lists", productListRouter);
app.post("/upload", upload.single("image"), (req, res) => {
    const file = req.file;
    res.status(200).json({result: file.filename});
});

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`));