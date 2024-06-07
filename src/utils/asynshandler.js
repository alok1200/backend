
const asyncHandler = (requesthandler) =>{
    return (req, res, next) =>{
        Promise
        .resolve(requesthandler(req, res, next) )
        .catch((err)=> next(err))
    }
}   // pasing high order function and pass second function in form of promice


export { asyncHandler }

//    const asyncHandler = (fn) => async (req, res, next) => {
    //       try{
    //             await  fn(req, res, next)
    //       }
    //       catch(error){
    //            response.status(err.status  || 5000).json({
    //             success: false,
    //             message: err.message
    //            })
    //       }
    // }

    // we taking file pasing higher function one pat in form of asyng, awate and try catch function 