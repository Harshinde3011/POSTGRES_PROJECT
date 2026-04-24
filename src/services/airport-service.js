import AirportRepository from "../repositories/airport-repository.js";

const airportRepository = new AirportRepository();

async function createAirport(data) {
    return airportRepository.create(data);
}

async function getAirport() {
    return airportRepository.getAll();
}

async function getAirportById(data) {
    return airportRepository.get(data);
}

async function destroyById(data) {
    return airportRepository.destroy(data);
}


async function updateAirport(id, data) {
    return airportRepository.update(id, data);
}

export default {
    createAirport,
    getAirport,
    getAirportById,
    destroyById,
    updateAirport
}
