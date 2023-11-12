class ApiError extends Error {
    constructor(statusCode, message = 'Something went wrong', errors = [], stack) {
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.success = false;
        this.data = null ; // assignment to be done

        if (stack) {
            this.stack = stack ;
        } else {
            Error.captureStackTrace(this. this.constructor);
        }
    }
}

exports.ApiError = ApiError;
