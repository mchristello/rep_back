import { Router } from "express";
import { create, deleteSale, get, getById, update } from "../controllers/ventas.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";


const router = Router();

router.get('/', AuthMiddleware.isAuthenticated, get);

router.get('/search/:vid', AuthMiddleware.isAuthenticated, getById);

router.post('/create', AuthMiddleware.isAuthenticated, create);

router.post('/update/:vid', AuthMiddleware.isAuthenticated, update);

router.delete('/delete/:vid', AuthMiddleware.isAuthenticated, deleteSale);

export default router;