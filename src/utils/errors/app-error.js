class ApiError extends Error {
    constructor(message, statusCode, explanation = message) {
        super(message);
        this.statusCode = statusCode;
        this.explanation = explanation;
    }
}

export default ApiError;
