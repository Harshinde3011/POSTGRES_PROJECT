import { Router } from "express";
import cityController from "../../controller/city-controller.js"

const _router = Router()

_router.post('/add', cityController.addCity)

export default _router;
