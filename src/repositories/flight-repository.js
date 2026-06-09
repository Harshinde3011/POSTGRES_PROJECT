import db from "../models/index.js"
import { col, Sequelize,Op } from "sequelize";
import CrudRepository from "./crud-repository.js"

class FlightRepository extends CrudRepository{
    constructor(){
        super(db.Flight);
    }

    getAllFlights(filter, sortFilter) {
        const response = db.Flight.findAll({
            where: filter,
            order: sortFilter,
            include: [{
                model: db.Airplane,
                required: true
            },
            {
                model: db.Airport,
                required: true,
                as: "departureAirport",
                attributes: ['name', 'cityId'],
                include: {
                    model: db.City,
                    attributes: ['name', 'cityCode']
                }
            },
            {
                model: db.Airport,
                required: true,
                as: "arrivalAirport",
                attributes: ['name', 'cityId']
            }
            ]
        })
        return response;
    }
}

export default FlightRepository;
