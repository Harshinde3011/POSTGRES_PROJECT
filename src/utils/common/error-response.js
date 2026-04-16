export default function createErrorResponse({
    message = "Something went wrong",
    data = {},
    error = {}
} = {}) {
    return {
        success: false,
        message,
        data,
        error
    };
}
