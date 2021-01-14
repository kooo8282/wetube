import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTue";
    res.locals.routes = routes;
    next();
}