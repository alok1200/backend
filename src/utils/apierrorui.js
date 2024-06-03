class ApiError extends Error {
 constructor (
    statusCode,
    message= "ther is some want rong", 
    error= [],
    statch= ""
 ){
   super(message);
   this.statusCode = statusCode;
   this.error = error;
   this.statch = statch;
   this.message = message; 
   this.success = false
   this.date = null

   if(statch){
         this.statch = statch
   }else
         {
            this.captuerStatchTrach(this, this.constructure)
         }
 }
}

 export { ApiError }