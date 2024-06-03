
import MongoDB from "./db/index.js";


MongoDB()
.then(() => {  
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("data dame not connecting",err);
})









// import express from "express"
// const  app = express()


// (async () =>{ 
//     try{

//       await mongoose.connect(`${process.env.MONGODB_URI} /${DB_NAME}`)
//       app.on(()=>{
//         console.error("ERROR ", error);
//         throw error 
//       })

//       app.listen(process.env.PORT, ()=>{
//         console.log(`app is listen on port  ${process.env.PORT} `)
//       })
//     }
//     catch{
//       console.error("error: ",error)
//       throw error
//     }
// })()