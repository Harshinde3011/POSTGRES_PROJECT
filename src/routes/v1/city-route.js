import { Router } from "express";
import cityController from "../../controller/city-controller.js"

const _router = Router()

_router.post('/add', cityController.addCity)
_router.get('/get', cityController.getCities)
_router.get('/get/:_id', cityController.getCity)
_router.delete('/delete/:_id', cityController.deleteCity)
_router.patch('/update/:_id', cityController.updateCity)

export default _router;
