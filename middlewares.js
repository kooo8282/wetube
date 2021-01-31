import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTue";
    res.locals.routes = routes;
    res.locals.user = { //fake user information
        isAuthenticated: true,
        id: 1
    }
    next();
}

export const uploadVideo = multerVideo.single("videoFile");