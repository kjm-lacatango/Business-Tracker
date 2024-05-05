import {Router} from 'express';
import { add, edit, get, remove } from '../controllers/product-names.js';
const router = Router();

router.post("/add", add);
router.get("/get", get)
router.put("/edit/:id", edit);
router.delete("/remove/:id", remove);

export default router;