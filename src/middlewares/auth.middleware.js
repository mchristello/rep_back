const isAuthenticated = (req, res, next) => {
    if(req.session?.user) {
        return next();
    }

    return res.status(401).send({ status: 'error', message: 'No has iniciado sesión' });
}

const currentUser = (req, res, next) => {
    if(req.user) {
        return next();
    }

    return res.status(401).send({ status: 'error', error: `No has iniciado sesión.` })
}

export const AuthMiddleware = { isAuthenticated, currentUser };