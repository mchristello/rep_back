// Import Dependencies
import express from 'express';
import passport from 'passport';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

// IMPORT UTILS
import config from './config/config.js';
import { __dirname } from './dirname.js';
import { connectMongo } from './utils/mongo.js';
import initializePassport from './config/passport.config.js';
import { passportCall } from './utils/utils.js';

// Routes
import ventasRouter from './routes/ventas.routes.js';
import userRouter from './routes/user.routes.js';
import sessionRouter from './routes/session.routes.js';

const app = express();

const PORT = config.PORT || 3000;

const httpServer = app.listen(PORT, console.log(`Server running at ${PORT}...`));

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(config.COOKIE_SECRET));


// Session
app.use(session({
    store: MongoStore.create({
        mongoUrl: config.MONGO_URI,
        dbName: config.DB_NAME,
        ttl: 5 * 60 * 60 * 24,
        autoRemove: 'disabled'
    }),
    secret: config.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 5 * 60 * 60 * 24
    }
}));

// Connection to MongoDB
// connectMongo();

// Passport 
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/', (req, res) => {
    return res.status(200).send({ status: 'success', message: 'This should be the homepage' });
});

app.use('/api/ventas', passportCall('jwt'), ventasRouter)

app.use('/api/users', passportCall('jwt'), userRouter);

app.use('/session', passportCall('jwt'), sessionRouter);

