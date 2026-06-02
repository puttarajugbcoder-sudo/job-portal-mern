//import nodejs framework
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

//server object
const app = express();

//middleware to parse incoming request body in JSON format.Express converts incoming JSON into a JavaScript object. without this middleware, req.body would be undefined for JSON requests.
app.use(express.json());

app.use("/api/auth", authRoutes);

//Used to fetch data app.get() method is used
//Used to send/save data app.post() method is used
app.get("/", (req, res) => {
    res.send("Job Portal API Running...");
});
app.post("/test", (req, res) => {
    console.log(req.body);
    res.send("Data recieved successfully");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});