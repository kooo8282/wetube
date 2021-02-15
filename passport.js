import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy()); // shortcut for strategy