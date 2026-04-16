import db from "../models/index.js"
import CrudRepository from "./crud-repository.js"

class CityRepository extends CrudRepository{
    constructor(){
        super(db.City);
    }
}

export default CityRepository;