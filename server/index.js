const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/food", require("./routes/foodRoutes"));

app.use("/api/beggar", require("./routes/beggarRoutes"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


