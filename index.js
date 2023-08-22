// dotenv , asyncErrors
require('dotenv').config()
require("express-async-errors")

// initial express
const express = require("express")
const app = express()


// rest of packages [morgan,cors]
const morgan = require("morgan")
const path = require("path")

// database
const connectDB = require("./db/connectDB")

// import routes
const taskRouter = require("./routes/task.routes")

// import errors middlleware
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// use trust proxy , use ratelimiter ,helmet , cors , xss , mogooseSanitize
app.set('trust proxy', 1);

// morgan , express.json, static folder
app.use(express.static(path.resolve(__dirname,"./public/dist")))
app.use(express.json())
app.use(morgan("tiny"))

// use routes
app.use("/api/v1/tasks", taskRouter)
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