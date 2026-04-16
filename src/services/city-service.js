import CityRepository from "../repositories/city-repository.js";

const cityRepository = new CityRepository();

async function createCity(data) {
    return cityRepository.create(data);
}

export default {
    createCity
};
