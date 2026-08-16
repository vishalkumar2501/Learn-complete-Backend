const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {

    const { username, email, password } = req.body;

    const user = await userModel.create({
        userName: username,
        email: email,
        password: password
    });

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET
    );

    res.json({
        message: "User registered successfully",
        user: user,
        token: token
    });
}

module.exports = { registerUser };