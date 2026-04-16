import { Router } from "express";
import airplaneController from "../../controller/airplane-controller.js";
import AirplaneMiddlewares from "../../middleware/index.js";

const _router = Router();

//api/v1/airplane/add
_router.post('/add', AirplaneMiddlewares.validateCreateAirplane, airplaneController.addAirplane);

//api/v1/airplane/get
_router.get('/get', airplaneController.getAllAirplane);

//api/v1/airplane/get/:_id
_router.get('/get/:_id', airplaneController.getAirplane);

//api/v1/airplane/delete/:_id
_router.delete('/delete/:_id', airplaneController.deleteAirplane);

//api/v1/airplane/update/:_id
_router.patch('/update/:_id', airplaneController.updateAirplaneData);




export default _router;