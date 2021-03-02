import passport from "passport";
import routes from "../routes";
import User from "../models/User"

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
    // console.log(req.body);
    const { //ES6 method
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        //To Do: Regisger User
        try {
            const user = await User({ // not User.create because User.register below will do that
                name,
                email
            })
            await User.register(user, password); // User.register => mongoDB{id,name,email,salt,hash,__v}
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
        //To Do: Log user in
    }
}

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "Log In" });

export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

export const githubLogin = passport.authenticate("github");

//below from passport.js = GitHubStrategy callback function
export const githubLoginCallback = async (_, __, profile, cb) => {
    const { _json: { id, avatar_url: avatarUrl, name, email } } = profile;
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.githubId = id;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl
        })
        return cb(null, newUser);
    } catch (error) {
        return cb(error);
    }
};

export const postGithubLogIn = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    // Todo : Process Log out
    req.logout();
    res.redirect(routes.home);
}

export const getMe = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail", user: req.user });
}

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });