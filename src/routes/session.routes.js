import { Router } from "express";
import passport from "passport";
import { registerPost, loginPost } from '../controllers/session.controller.js';

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: '/users/error' }), registerPost)

router.post('/login', passport.authenticate('local', { failureRedirect: '/users/error' }), loginPost)


export default router;