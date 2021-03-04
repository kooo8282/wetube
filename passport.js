import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook"
import { facebookLoginCallback, githubLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

console.log(process.env.GH_ID, process.env.GH_SECRET)

passport.use(User.createStrategy()); // shortcut for local strategy

passport.use(new GithubStrategy(
    {
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
)
);

passport.use(new FacebookStrategy(
    {
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: `http://localhost:4000${routes.facebookCallback}`
    },
    facebookLoginCallback
)
);

// shortcut by passport-lacal-mongoose
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser())
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));