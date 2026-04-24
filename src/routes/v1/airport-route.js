import { Router } from "express";
import airportController from "../../controller/airport-controller.js";
import airportMiddleware from "../../middleware/airport-middleware.js";

const _router = Router();

// api/v1/airport/add
_router.post('/add', airportMiddleware.validateCreateAirport, airportController.addAirport)

//api/v1/airport/get
_router.get('/get', airportController.getAllAirports);

//api/v1/airport/get/:_id
_router.get('/get/:_id', airportController.getAirport);

//api/v1/airport/delete/:_id
_router.delete('/delete/:_id', airportController.deleteAirport);

//api/v1/airport/update/:_id
_router.patch('/update/:_id', airportController.updateAirportData);

export default _router;