import db from "../models/index.js"
import CrudRepository from "./crud-repository.js"

class FlightRepository extends CrudRepository{
    constructor(){
        super(db.Flight);
    }

    getAllFlights(filter, sortFilter){
        const response = db.Flight.findAll({
            where: filter,
            order: sortFilter
        })
        return response;
    }
}

export default FlightRepository;
