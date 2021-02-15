import mongoose from "mongoose";
import passportoLcalMongoose from "passport-local-mongoose"

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number
})

UserSchema.plugin(passportoLcalMongoose, {usernameField: "email"});

const model = mongoose.model("User", UserSchema);

export default model;