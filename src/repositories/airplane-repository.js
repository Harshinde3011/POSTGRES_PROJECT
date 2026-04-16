import db from "../models/index.js"
import CrudRepository from "./crud-repository.js"

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(db.Airplane);
    }
}

export default AirplaneRepository;