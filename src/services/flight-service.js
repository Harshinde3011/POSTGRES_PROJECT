import FlightRepository from "../repositories/flight-repository.js";

const flightRepository = new FlightRepository();

async function createFlight(data) {
    return flightRepository.create(data);
}

export default {
    createFlight
}
