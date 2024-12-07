import { Router } from "express";
import { create, deleteSale, get, getById, update } from "../controllers/ventas.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import { authToken } from "../utils/utils.js";


const router = Router();

router.get('/', authToken, AuthMiddleware.isAuthenticated, get);

router.get('/search/:vid', authToken, AuthMiddleware.isAuthenticated, getById);

router.post('/create', authToken, AuthMiddleware.isAuthenticated, create);

router.post('/update/:vid', authToken, AuthMiddleware.isAuthenticated, update);

router.delete('/delete/:vid', authToken, AuthMiddleware.isAuthenticated, deleteSale);

export default router;