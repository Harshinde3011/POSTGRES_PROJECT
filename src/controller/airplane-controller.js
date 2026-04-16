import airplaneServices from "../services/airplane-service.js"
import { StatusCodes } from "http-status-codes"
import createSuccessResponse from "../utils/common/success-response.js";
/**
 * POST: /airplanes
 * req-body { modelNumber: 'airbus59', capacity:  200} 
 */

async function addAirplane(req, res, next) {
    try {
        const { modelNumber, capacity } = req.body;

        const data = await airplaneServices.createAirplane({
            modelNumber,
            capacity
        });

        return res.status(StatusCodes.CREATED).json(
            createSuccessResponse({ data })
        );
    } catch (error) {
        return next(error);
    }
}

async function getAllAirplane(req, res, next) {
    try {

        const data = await airplaneServices.getAirplane();
        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "Airplane data fetched successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

async function getAirplane(req, res, next) {
    try {
        const { _id } = req.params;
        const data = await airplaneServices.getAirplaneById(_id);
        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "Airplane data fetched successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}


async function deleteAirplane(req, res, next) {
    try {
        const { _id } = req.params;
        const data = await airplaneServices.destroyById(_id);

        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data,
                message: "Airplane data deleted successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

async function updateAirplaneData(req, res, next) {
    try {
        const { _id } = req.params;
        
        const result = await airplaneServices.updateAirplane(_id, req.body);

        return res.status(StatusCodes.OK).json(
            createSuccessResponse({
                data: result,
                message: "Airplane data updated successfully"
            })
        );
    } catch (error) {
        return next(error);
    }
}

export default {
    addAirplane,
    getAllAirplane,
    getAirplane,
    deleteAirplane,
    updateAirplaneData
}
