import { Router } from "express";
import flightController from "../../controller/flight-controller.js";
import flightMiddleware from "../../middleware/flight-middleware.js";
const _router = Router();

// api/v1/flight/add
_router.post('/add', flightMiddleware.validateCreateFlight, flightController.addFlight)

export default _router;