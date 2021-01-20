import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTue";
    res.locals.routes = routes;
    res.locals.user = { //fake user information
        isAuthenticated: true,
        id: 1
    }
    next();
}