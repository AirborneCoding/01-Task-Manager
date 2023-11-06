// dotenv , asyncErrors
require('dotenv').config()
require("express-async-errors")

// initial express
const express = require("express")
const app = express()


// rest of packages [morgan,cors]
const morgan = require("morgan")
const path = require("path")
const cors = require("cors")

// database
const connectDB = require("./db/connectDB")

// import routes
const taskRouter = require("./routes/task.routes")

// import errors middlleware
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// use trust proxy , use ratelimiter ,helmet , cors , xss , mogooseSanitize
app.set('trust proxy', 1);
app.use(cors())

const corsOptions = {
    origin: "http://localhost:5174"
}

// morgan , express.json, static folder
app.use(express.static(path.resolve(__dirname, "./public/dist")))
app.use(express.json())
// app.use(morgan("tiny"))

// use routes
app.use("/api/v1/tasks", taskRouter)
app.get("/api/v1/events", cors(corsOptions), (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    })

    setInterval(() => {
        const data = { message: "hello work" }
        console.log("sent data");
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, 1000)
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/dist', 'index.html'));
});

// use errors middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// port and start function
const PORT = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log("Server is running on port: ", PORT))
    } catch (error) {
        console.log("Something went wrong:</br> ", error);
    }
}
start()