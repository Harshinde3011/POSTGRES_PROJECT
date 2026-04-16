export default function createSuccessResponse({
    message = "Successfully completed the request",
    data = {},
    error = {}
} = {}) {
    return {
        success: true,
        message,
        data,
        error
    };
}
