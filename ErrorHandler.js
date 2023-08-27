
class ErrorHandler { 
    constructor(status, message) { 
        this.status = status; 
        this.message = message; 
    } 

    static pageNotFound(message = 'Page Not Found') { 
        return new ErrorHandler(404, message); 
    } 

    static forbidden(message = 'You have no access! Restricted data.') { 
        return new ErrorHandler(403, message); 
    } 

    static validationError(message = 'All fields are required!') { 
        return new ErrorHandler(422, message); 
    } 

    static serverError(message = 'Internal Error') { 
        return new ErrorHandler(500, message); 
    } 
} 

module.exports = ErrorHandler; 