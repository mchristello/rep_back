import config from "../config/config.js";
import { generateToken } from "../utils/utils.js";



export const registerPost = async (req, res) => {
    try {
        const user = req.user
        if(!user) {
            return res.satus(400).json({
                status: 'error',
                message: `Cannot create the account, please verify the entered data.`
            })
        }

        return res.status(201).json({ 
            status: 'success', 
            message: 'New user created successfully', 
            payload: user 
        })
    } catch (error) {
        console.log(`Error in create at session.controller: ${error.message}`);
        return res.status(500).json({ status: 'error', error: error.message });
    }
}

export const loginPost = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(403).send({ status: 'error', message: `User not found` })
        }

        req.session.user = {
            _id: req.user._id,
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            email: req.user.email,
            role: req.user.role,
        }

        const user = { ...req.session.user }

        const token = generateToken(user)
        user.token = token

        // Configurar cookie segura si se usa
        res.cookie(config.COOKIE_NAME, user.token, {
            httpOnly: true, // Asegura que la cookie no sea accesible vía JavaScript
            secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
            sameSite: 'strict', // Evita fugas CSRF
            maxAge: 1000 * 60 * 60 * 24 * 7, // Una semana de duración
        });

        return res.status(200).json({
            status: 'success',
            message: 'Login Successful',
            payload: user,
        });
    } catch (error) {
        console.log(`Error in create at session.controller: ${error.message}`);
        return res.status(500).send({ status: 'error', error: error.message });
    }
}