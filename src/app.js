import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"; //user k cookies main CRUD krskyn
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit:"16kb"})) // give limit because we don't want large json which crash the server
app.use(express.urlencoded({extended: true, limit: "16kb"})) // extended allow us for nested object
app.use(express.static("public")) // like file and images like assets insert in public folder
app.use(cookieParser())


export {app} 