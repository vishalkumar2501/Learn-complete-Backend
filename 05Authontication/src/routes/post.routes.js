const express = require("express");

const router = express.Router();

router.post("/create", (req, res) => {

    console.log("Cookies:", req.cookies);

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    console.log("Token:", token);

    res.send("Post created successfully");
});

module.exports = router;