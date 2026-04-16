import { StatusCodes } from "http-status-codes";
import Logger from "../config/logger.js"
import ApiError from "../utils/errors/app-error.js";

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("error in CrudRepository.create");
            throw error;
        }
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });

            if (!response) {
                throw new ApiError("Resource not found", StatusCodes.NOT_FOUND);
            }

            return response;
        } catch (error) {
            Logger.error("error in CrudRepository.destroy");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const [updatedRows] = await this.model.update(data, {
                where: {
                    id: id
                }
            });

            if (!updatedRows) {
                throw new ApiError("Resource not found", StatusCodes.NOT_FOUND);
            }

            const updatedEntity = await this.model.findByPk(id);
            return updatedEntity;
        } catch (error) {
            Logger.error("error in CrudRepository.update");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();

            return response;
        } catch (error) {
            Logger.error("error in CrudRepository.getAll");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);

            if (!response) {
                throw new ApiError("Resource not found", StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            Logger.error("error in CrudRepository.get");
            throw error;
        }
    }
}

export default CrudRepository;
