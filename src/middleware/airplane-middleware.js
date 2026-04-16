import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/errors/app-error.js";

function validateCreateAirplane(req, res, next) {
    const { modelNumber, capacity } = req.body;

    if (!modelNumber) {
        return next(
            new ApiError(
                "Invalid request body for airplane",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid model number for airplane"
            )
        );
    }

    if (capacity === undefined || Number(capacity) <= 0) {
        return next(
            new ApiError(
                "Invalid request body for airplane",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid positive capacity for airplane"
            )
        );
    }

    next();
}

export default {
    validateCreateAirplane
};
