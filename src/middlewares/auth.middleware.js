const isAuthenticated = (req, res, next) => {
    // console.log(req.session.user);
    if(req.session?.user) {
        return next();
    }

    return res.status(401).send({ status: 'error', message: 'No has iniciado sesión' });
}

const currentUser = (req, res, next) => {
    // console.log(req.user);
    if(req.user) {
        return next();
    }

    return res.status(401).send({ status: 'error', error: `No has iniciado sesión.` })
}

export const AuthMiddleware = { isAuthenticated, currentUser };