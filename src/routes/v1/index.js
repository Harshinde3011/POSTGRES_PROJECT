import express from "express"
import AirplaneRoute from "./airplane-route.js"
import CityRoute from "./city-route.js"
import AirportRoute from "./airport-route.js"

const router = express.Router();

router.use('/airplane', AirplaneRoute);
router.use('/city', CityRoute);
router.use('/airport', AirportRoute)

export default router;


