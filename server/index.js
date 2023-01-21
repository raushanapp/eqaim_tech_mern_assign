const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());

// all routes
app.use("/blogs",require("./routes/blogs.routes"))


// connect Database
const PORT = process.env.PORT || 2400;

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log("Database connected")
    } catch (error) {
        console.log({ error: error.message });
    }
    console.log(`Server running port on ${PORT}`)
});

module.exports = app;
