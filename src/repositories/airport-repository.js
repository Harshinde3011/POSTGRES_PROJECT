import db from "../models/index.js"
import CrudRepository from "./crud-repository.js"

class AirportRepository extends CrudRepository{
    constructor(){
        super(db.Airport);
    }
}

export default AirportRepository;
