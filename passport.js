import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy()); // shortcut for strategy

// shortcut by passport-lacal-mongoose
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());