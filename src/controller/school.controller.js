import { add, getAllSchools } from "../model/school.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addSchool = asyncHandler(async (req, res) => {

    const { name, address, latitude, longitude } = req.body;


    if (!name || !address || longitude == null || latitude == null) {
        throw new ApiError(
            400,
            "All fields are required"
        );
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        throw new ApiError(
            400,
            "latitude and longitude must be number"
        );
    }

    const newSchool = await add({
        name,
        address,
        latitude,
        longitude
    });



    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                { data: newSchool },
                "School added successfully"
            )
        );
});

const listSchool = asyncHandler(async (req, res) => {
    const { latitude, longitude } = req.query;

    if (latitude == null || longitude == null) {
        throw new ApiError(
            400,
            "Latitude and longitude are required"
        );
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        throw new ApiError(
            400,
            "Invalid coordinates"
        );
    }

    const userLat = Number(latitude);
    const userlon = Number(longitude);

    const schools = await getAllSchools();

    const schoolDistance = schools.map((school) => {
        const distance = calculateDistance(
            userLat,
            userlon,
            Number(school.latitude),
            Number(school.longitude)
        );
        return {
            ...school,
            distance
        };
    });

         schoolDistance.sort((a,b) => a.distance - b.distance);
         
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                { schools: schoolDistance },
                "Schools fetched successsfully"
            )
        );
});

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;

    const toRad = (deg) => deg * Math.PI / 180;

    const dlat = toRad(lat2 - lat1);
    const dlon = toRad(lon2 - lon1);

    const a = Math.sin(dlat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dlon / 2) ** 2;

    const c = 2 * Math.atan(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

export {
    addSchool,
    listSchool
}