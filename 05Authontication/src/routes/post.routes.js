const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model")


const router = express.Router();

router.post("/create", async (req, res) => {

    console.log("Cookies:", req.cookies);

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "No token provided"
        });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id: decoded.id
        })

        console.log(user)
        
    } catch (err) {
        return res.status(401).json({
            message: "Token is invalid"
        })
    }

    console.log("Token:", token);

    res.send("Post created successfully");
});

module.exports = router;