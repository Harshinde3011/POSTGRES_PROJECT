import FlightRepository from "../repositories/flight-repository.js";
import { Op } from "sequelize"

const flightRepository = new FlightRepository();

async function createFlight(data) {
    return flightRepository.create(data);
}

async function getAllFlights(query) {

    let filter = {};
    let sortFilter = [];

    if (query.trips) {
        const [departureAirportId, arrivalAirportId] = query.trips.split("-");

        if (departureAirportId === arrivalAirportId) {
            throw new Error("Departure and arrival airports cannot be the same");
        }

        filter.departureAirportId = departureAirportId;
        filter.arrivalAirportId = arrivalAirportId;
    }

    if (query.price) {
        let [minPrice, maxPrice] = query.price.split("-");

        minPrice = minPrice || 0;
        maxPrice = maxPrice || 2000;

        filter.price = {
            [Op.between]: [Number(minPrice), Number(maxPrice)]
        };
    }

    if (query.travellers) {
        filter.totalSeats = {
            [Op.gte]: parseInt(query.travellers)
        };
    }

    if (query.travelDate) {
        const startDate = new Date(query.travelDate);

        const endDate = new Date(
            startDate.getTime() + 24 * 60 * 60 * 1000
        );

        filter.departureTime = {
            [Op.gte]: startDate,
            [Op.lte]: endDate
        };
    }

    // sorting
    if (query.sortBy) {
        const sortBy = query.sortBy.split(",");

        sortFilter = sortBy.map((field) => {
            const [key, direction] = field.split("_");

            return [key, direction];
        });
    }

    // exports.getStaticCompanies = function () {
    //     return Company.findAll({
    //         where: {
    //             id: [46128, 2865, 49569, 1488, 45600, 61991, 1418, 61919, 53326, 61680]
    //         },
    //         // Add order conditions here....
    //         order: [
    //             ['id', 'DESC'],
    //             ['name', 'ASC'],
    //         ],
    //         attributes: ['id', 'logo_version', 'logo_content_type', 'name', 'updated_at']
    //     });
    // };

    try {

        const flights = await flightRepository.getAllFlights(filter,sortFilter);

        return flights;

    } catch (error) {
        console.log(error);

        throw new Error(
            "Error in fetching flights from flightService.getAllFlights"
        );
    }
}

export default {
    createFlight,
    getAllFlights
}
