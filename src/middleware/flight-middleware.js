import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/errors/app-error.js";

function validateCreateFlight(req, res, next) {
    const { flightNumber, airplaneId, departureAirportId, arrivalAirportId, departureTime, price, arrivalTime, totalSeats } = req.body;

    if (!flightNumber) {
        return next(
            new ApiError(
                "Invalid request body for flight",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid flightNumber for flight"
            )
        );
    }

    if (!airplaneId) {
        return next(
            new ApiError(
                "Invalid request body for flight",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid airplaneId for flight"
            )
        );
    }

    if (!departureAirportId) {
        return next(
            new ApiError(
                "Invalid request body for flight",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid departureAirportId for flight"
            )
        );
    }

    if (!arrivalAirportId) {
        return next(
            new ApiError(
                "Invalid request body for flight",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid arrivalAirportId for flight"
            )
        );
    }

    if (!departureTime) {
        return next(
            new ApiError(
                "Invalid request body for flight",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid departureTime for flight"
            )
        );
    }

    if (!price) {
        return next(
            new ApiError(
                "Invalid request body for flight",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid price for flight"
            )
        );
    }


    if (!totalSeats) {
        return next(
            new ApiError(
                "Invalid request body for flight",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid totalSeats for flight"
            )
        );
    }


    if (!arrivalTime) {
        return next(
            new ApiError(
                "Invalid request body for flight",
                StatusCodes.BAD_REQUEST,
                "Please provide a valid arrivalTime for flight"
            )
        );
    }

    next();
}

export default {
    validateCreateFlight
};
