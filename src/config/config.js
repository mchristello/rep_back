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
    GOOGLE_TRANSPORT_PASS: process.env.GOOGLE_TRANSPORT_PASS,
    // Credentials
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REDIRECT_URI: process.env.REDIRECT_URI,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    AUTH_URI: process.env.AUTH_URI,
    TOKEN_URI: process.env.TOKEN_URI,
    // URLs
    DEV_URL: process.env.DEV_URL,
    PROD_URL: process.env.PROD_URL,
}