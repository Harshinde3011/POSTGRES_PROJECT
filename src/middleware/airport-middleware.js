import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/errors/app-error.js";

function validateCreateAirport(req, res, next) {
    const { name, code, cityId } = req.body;

    if (!name) {
        return next(
            new ApiError(
                "Invalid request body for airport",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid name for airport"
            )
        );
    }

    if (!code) {
        return next(
            new ApiError(
                "Invalid request body for airport",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid code for airport"
            )
        );
    }

    if (!cityId) {
        return next(
            new ApiError(
                "Invalid request body for airport",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid cityId for airport"
            )
        );
    }

    next();
}

export default {
    validateCreateAirport
};
