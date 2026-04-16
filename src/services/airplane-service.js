import AirplaneRepository from "../repositories/airplane-repository.js";

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    return airplaneRepository.create(data);
}

async function getAirplane() {
    return airplaneRepository.getAll();
}

async function getAirplaneById(data) {
    return airplaneRepository.get(data);
}

async function destroyById(data) {
    return airplaneRepository.destroy(data);
}


async function updateAirplane(id, data) {
    return airplaneRepository.update(id, data);
}

export default {
    createAirplane,
    getAirplane,
    getAirplaneById,
    destroyById,
    updateAirplane
}
