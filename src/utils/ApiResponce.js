class ApiError{
    constructor(statusCode, data, message= "success"  ){
        this.statusCode = statusCode;
        this.data = data;
        this.date = message;
        this.success = statusCode < 400 

    }
}

export { ApiError }