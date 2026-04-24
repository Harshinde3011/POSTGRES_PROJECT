import db from "../models/index.js"
import CrudRepository from "./crud-repository.js"

class FlightRepository extends CrudRepository{
    constructor(){
        super(db.Flight);
    }
}

export default FlightRepository;
