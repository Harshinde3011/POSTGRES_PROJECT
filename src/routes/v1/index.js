import express from "express"
import AirplaneRoute from "./airplane-route.js"
import CityRoute from "./city-route.js"
import AirportRoute from "./airport-route.js"
import FlightRoute from "./flight-route.js"

const router = express.Router();

router.use('/airplane', AirplaneRoute);
router.use('/city', CityRoute);
router.use('/airport', AirportRoute);
router.use('/flight', FlightRoute)

export default router;


