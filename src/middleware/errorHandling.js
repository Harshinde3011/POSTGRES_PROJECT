import { StatusCodes } from "http-status-codes";
import { ValidationError, UniqueConstraintError, DatabaseError } from "sequelize";
import logger from "../config/logger.js";
import createErrorResponse from "../utils/common/error-response.js";
import ApiError from "../utils/errors/app-error.js";

function normalizeError(err) {
    if (err instanceof ApiError) {
        return err;
    }

    if (err instanceof UniqueConstraintError) {
        const explanation = err.errors.map((error) => error.message);
        return new ApiError(
            "A unique field already has this value",
            StatusCodes.CONFLICT,
            explanation
        );
    }

    if (err instanceof ValidationError) {
        const explanation = err.errors.map((error) => error.message);
        return new ApiError(
            "Validation failed for the request",
            StatusCodes.BAD_REQUEST,
            explanation
        );
    }

    if (err instanceof DatabaseError) {
        return new ApiError(
            "Database operation failed",
            StatusCodes.INTERNAL_SERVER_ERROR,
            err.message
        );
    }

    return new ApiError(
        err.message || "Internal Server Error",
        StatusCodes.INTERNAL_SERVER_ERROR,
        err.message || "Unexpected error"
    );
}

export function notFoundHandler(req, res, next) {
    next(new ApiError(`Route ${req.originalUrl} not found`, StatusCodes.NOT_FOUND));
}

export function errorHandling(err, req, res, next) {
    const normalizedError = normalizeError(err);

    logger.error(
        `[${req.method} ${req.originalUrl}] ${normalizedError.statusCode} - ${normalizedError.message}`
    );

    return res.status(normalizedError.statusCode).json(
        createErrorResponse({
            message: normalizedError.message,
            error: {
                explanation: normalizedError.explanation
            }
        })
    );
}
