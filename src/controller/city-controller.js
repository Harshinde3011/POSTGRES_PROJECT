import cityService from "../services/city-service.js"
import { StatusCodes } from "http-status-codes"
import createSuccessResponse from "../utils/common/success-response.js"
import ApiError from "../utils/errors/app-error.js"

async function addCity(req, res, next) {
    try {
        const { name, status, cityCode } = req.body;

        if (!name) {
            throw new ApiError(
                "Invalid request body for city",
                StatusCodes.BAD_REQUEST,
                "Please provide city name"
            );
        }

        const updatedName = name.toLowerCase().trim();
        
        const data = await cityService.createCity({
            name: updatedName,
            cityCode,
            status
        });

        return res.status(StatusCodes.CREATED).json(
            createSuccessResponse({ data })
        );
    } catch (error) {
        return next(error);
    }
}

export default {
    addCity
};
