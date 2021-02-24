import mongoose from "mongoose";
import passportoLcalMongoose from "passport-local-mongoose"

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number
})

// First you need to plugin Passport-Local Mongoose into your User schema
UserSchema.plugin(passportoLcalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;