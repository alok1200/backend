import { response } from "express"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    process: process.env.CORS_ORIGIN,
    Credentials: true
}))
app.use(express.json({Limit: "16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("publick"))
app.use(cookieParser())


app.on("error", ()=>{
   console.error("ERROR", error)
})

// app.listen(process.env.PORT,()=>{
//     console.log(`app is lested on this port ${process.env.PORT}`)
// })


//Routes import 
import UserRoutes from "./routes/User.routes.js"



//Routs declaraction
app.use("api/v1/user", UserRoutes)








export default app ;