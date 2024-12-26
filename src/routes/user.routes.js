import { Router } from "express";
import { create, currentUser, deleteUser, findByEmail, get } from "../controllers/users.controller.js";
import { authToken } from "../utils/utils.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";


const router = Router();

router.get('/', get);

router.get('/search', findByEmail);

router.post('/create', create);

router.delete('/delete/:uid', deleteUser);


// router.get('/current', AuthMiddleware.currentUser, authToken, currentUser);


export default router;
