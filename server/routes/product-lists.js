import {Router} from 'express';
import { add, getAll, getById, remove, update } from '../controllers/product-lists.js';
const router = Router();

router.post("/add", add);
router.get("/lists", getAll);
router.get("/list/:id", getById);
router.put("/list/:id", update);
router.delete("/remove", remove);

export default router;