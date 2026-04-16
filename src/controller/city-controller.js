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

async function getCities(req, res, next) {
    try {
        const data = await cityService.getCities();

        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "City data fetched successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

async function getCity(req, res, next) {
    try {
        const { _id } = req.params;
        const data = await cityService.getCityById(_id);

        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "City data fetched successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

async function deleteCity(req, res, next) {
    try {
        const { _id } = req.params;
        const data = await cityService.deleteCity(_id);

        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "City data deleted successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

async function updateCity(req, res, next) {
    try {
        const { _id } = req.params;
        const payload = { ...req.body };

        if (payload.name) {
            payload.name = payload.name.toLowerCase().trim();
        }

        const data = await cityService.updateCity(_id, payload);

        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "City data updated successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

export default {
    addCity,
    getCities,
    getCity,
    deleteCity,
    updateCity
};
