import flightService from "../services/flight-service.js";
import { StatusCodes } from "http-status-codes"
import createSuccessResponse from "../utils/common/success-response.js";
import ApiError from "../utils/errors/app-error.js";
import db from "../models/index.js"

async function addFlight(req, res, next) {
    try {
        const reqBody = req.body;

        const data = await flightService.createFlight({
            flightNumber: reqBody.flightNumber,
            airplaneId: reqBody.airplaneId,
            departureAirportId: reqBody.departureAirportId,
            arrivalAirportId: reqBody.arrivalAirportId,
            departureTime: reqBody.departureTime,
            arrivalTime: reqBody.arrivalTime,
            price: reqBody.price,
            boardingGate: reqBody.boardingGate,
            totalSeats: reqBody.totalSeats
        });

        return res.status(StatusCodes.CREATED).json(
            createSuccessResponse({ data })
        );
    } catch (error) {
        return next(error);
    }
}

export default {
    addFlight,
}
