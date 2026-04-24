import airportService from "../services/airport-service.js"
import { StatusCodes } from "http-status-codes"
import createSuccessResponse from "../utils/common/success-response.js";
import ApiError from "../utils/errors/app-error.js";
import db from "../models/index.js"
/**
 * POST: /airport
 * req-body { name: 'airbus59', code: 'AIR76', cityId: 1, address: '....'} 
 */

async function addAirport(req, res, next) {
    try {
        const reqBody = req.body;

        if (!reqBody.code || !reqBody.name) {
            throw new ApiError(
                "Invalid request body for airport",
                StatusCodes.BAD_REQUEST,
                "Please provide airport code and name"
            );
        }

        const normalizedCode = reqBody.code.trim().toUpperCase();

        const existingAirport = await db.Airport.findOne({
            where: {
                code: normalizedCode
            }
        });

        if (existingAirport) {
            throw new ApiError(
                "Airport code already exists",
                StatusCodes.CONFLICT,
                `Airport with code ${normalizedCode} already exists`
            );
        }

        const data = await airportService.createAirport({
            ...reqBody,
            code: normalizedCode
        });

        return res.status(StatusCodes.CREATED).json(
            createSuccessResponse({ data })
        );
    } catch (error) {
        return next(error);
    }
}

async function getAllAirports(req, res, next) {
    try {

        const data = await airportService.getAirport();
        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "Airport data fetched successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

async function getAirport(req, res, next) {
    try {
        const { _id } = req.params;
        const data = await airportService.getAirportById(_id);
        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "Airport data fetched successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}


async function deleteAirport(req, res, next) {
    try {
        const { _id } = req.params;
        const data = await airportService.destroyById(_id);

        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "Airport data deleted successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

async function updateAirportData(req, res, next) {
    try {
        const { _id } = req.params;
        
        const result = await airportService.updateAirport(_id, req.body);

        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data: result,
                message: "Airport data updated successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

export default {
    addAirport,
    getAllAirports,
    getAirport,
    deleteAirport,
    updateAirportData
}
