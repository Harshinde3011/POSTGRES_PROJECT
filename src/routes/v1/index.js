import express from "express"
import AirplaneRoute from "./airplane-route.js"
import CityRoute from "./city-route.js"

const router = express.Router();

router.use('/airplane', AirplaneRoute);
router.use('/city', CityRoute);

export default router;


