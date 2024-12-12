import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY,
    ENTORNO: process.env.ENT,
    PERSISTENCE: process.env.PERSISTENCE,
    // Mongo
    MONGO_URI: process.env.MONGO_URI,
    DB_NAME: process.env.DB_NAME,
    // JWT
    JWT_PASS: process.env.JWT_PASS,
    // Cookies
    COOKIE_NAME: process.env.COOKIE_NAME,
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    // Nodemailer
    TRANSPORT_USER: process.env.TRANSPORT_USER,
    HOTMAIL_TRANSPORT_PASS: process.env.HOTMAIL_TRANSPORT_PASS,
    GOOGLE_TRANSPORT_PASS: process.env.GOOGLE_TRANSPORT_PASS,
    // URLs
    DEV_URL: process.env.DEV_URL,
    PROD_URL: process.env.PROD_URL,
}