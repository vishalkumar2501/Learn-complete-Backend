const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  try {
    const { username, email, password, role = "user" } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields (username, email, password) are required."
      });
    }

    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedUsername = username.trim();

    const allowedRoles = ["user", "artist"];
    if (role && !allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role. Role must be either 'user' or 'artist'."
      });
    }

    const isUserAlreadyExist = await userModel.findOne({
      $or: [{ username: sanitizedUsername }, { email: sanitizedEmail }]
    });

    if (isUserAlreadyExist) {
      return res.status(400).json({
        message: "User already exists with this email or username."
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      username: sanitizedUsername,
      email: sanitizedEmail,
      password: hashPassword,
      role
    });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Register User Error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
}

async function loginUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // 1. Check karein ki (username ya email) aur password aaya hai ya nahi
    if ((!username && !email) || !password) {
      return res.status(400).json({ message: "Username/Email and password are required" });
    }

    // 2. Database me user ko dhundhein
    const user = await userModel.findOne({
      $or: [
        { username: username },
        { email: email }
      ]
    });

    // 3. Agar user nahi mila
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 4. Password compare karein
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 5. JWT Token generate karein
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET
    );

    // 6. Token ko cookie me set karein
    res.cookie("token", token);

    // 7. Success response bhejein
    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}



module.exports = { registerUser , loginUser };