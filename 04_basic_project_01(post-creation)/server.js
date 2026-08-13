require("dotenv").config(); // .env ki values ko process.env mein load karta hai

const app = require('./src/app.js'); // Express app ko import karta hai

const connectDB = require('./src/db/db.js'); // MongoDB connection function import karta hai

connectDB(); // MongoDB se connect karta hai

app.listen(3000, () => { // Server ko port 3000 par start karta hai
    console.log('Server is running on port 3000'); // Server start hone ka message
});