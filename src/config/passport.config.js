// Envs Import
import config from "./config.js";
// Passport configuration imports
import passport from "passport";
import local from 'passport-local';
import jwt from 'passport-jwt';
// Utils Imports
import { UserService } from "../repository/index.js";
import { createHash, validatePassword } from "../utils/utils.js";
import UserModel from "../dao/mongo/models/users.model.js";



const LocalStrategy = local.Strategy;
const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {

    // Local 
    passport.use('register', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    },
    async(req, username, password, done) => {
        const { first_name, last_name, email } = req.body;
        try {
            const user = await UserService.findByEmail(username);
            if (user) {
                console.log(`Already exists a user with email ${username}`);
                return done(null, user)
            }

            const newUser = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: createHash(password),
                role: 'user'
            }

            const result = await UserService.create(newUser);

            if(result.email === 'm.christello@hotmail.com') {
                result.role = 'admin';
                await result.save();
                return done(null, result);
            }

            await result.save();
            return done(null, result);
            
        } catch (error) {
            console.log(`Error in PASSPORT - REGISTER: ${error}`);
            return done(`There's been an error trying to register: ${error.message}`)
        }
    }
    ));

    // Login Local
    passport.use('local', new LocalStrategy({
        usernameField: 'email'
    }, 
    async(username, password, done) => {
        try {
            const user = await UserService.findByEmail(username);
            if(!user) {
                console.log(`Something's wrong, we culdn't find the user.`);
                return done(null, false)
            }

            if(!validatePassword(user, password)) {
                return done(null, false);
            }

            return done(null, user)
        } catch (error) {
            console.log(`Error in PASSPORT - LOGIN: ${error}`);
            return done(`There's been an error trying to login: ${error.message}`)
        }
    }))

    // JWT Passport Strategy
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.JWT_PASS
    },
    async(jwt_payload, done) => {
        try {
            const user = jwt_payload
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id)
    });

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        done(null, user)
    });
    
}

export default initializePassport;

