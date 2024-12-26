import { Router } from "express";
import passport from "passport";
import { registerPost, loginPost } from '../controllers/session.controller.js';

const router = Router();

router.post('/register', passport.authenticate('register', { session: false }), registerPost)

router.post('/login', passport.authenticate('local', { session: false }), loginPost)


export default router;