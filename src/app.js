import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import hospitalRouter from './routes/hospital.routes.js'
import doctorRouter from './routes/doctor.routes.js'
import patientRouter from './routes/patient.routes.js'
//routes declaration

app.use("/api/v1/users", userRouter)
app.use('/api/v1/users/hospital', hospitalRouter)
app.use('/api/v1/users/doctor',doctorRouter)
app.use('/api/v1/users',patientRouter)


// http://localhost:8000/api/v1/users/register

export { app }