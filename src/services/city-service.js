import CityRepository from "../repositories/city-repository.js";

const cityRepository = new CityRepository();

async function createCity(data) {
    return cityRepository.create(data);
}

async function getCities() {
    return cityRepository.getAll();
}

async function getCityById(id) {
    return cityRepository.get(id);
}

async function deleteCity(id) {
    return cityRepository.destroy(id);
}

async function updateCity(id, data) {
    return cityRepository.update(id, data);
}

export default {
    createCity,
    getCities,
    getCityById,
    deleteCity,
    updateCity
};
