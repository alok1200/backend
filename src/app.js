import { response } from "express"
import express from express
import cors from cors
import cookieParser from "cookie-parser"








const app = express()

app.use(cors({
    process: process.env.CORS_ORIGIN,
    Credentials: true
}))
app.use(express.jsone({Limit: "16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.statick("publick"))
app.use(cookieParser())





app.on(()=>{
   console.error("ERROR", error)
})

app.listen(process.env.PORT,()=>{
    console.log(`app is lested on this port ${process.env.PORT}`)
})


export { app };