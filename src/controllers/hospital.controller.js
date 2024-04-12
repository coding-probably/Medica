import {asyncHandler} from '../utils/asyncHandeler.js';
import {ApiError} from '../utils/ApiError.js';
import {Hospital} from '../models/hospital.model.js';
import { User } from '../models/user.model.js'
import { ApiResponse } from '../utils/ApiResponse.js';


const HospitalRegistration = asyncHandler(async (req, res) => {
    const { Name, address, Contact, ID } = req.body;

    // Check if required fields are empty
    if (!Name) {
        throw new ApiError(400, "Name is required");
    }
    if (!address) {
        throw new ApiError(400, "Address is required");
    }
    if (!Contact) {
        throw new ApiError(400, "Contact is required");
    }
    if (!ID) {
        throw new ApiError(400, "ID is required");
    }

    try {
        // Check if the provided ID corresponds to an existing user
        const user = await User.findOne({ID});
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Check if the hospital is already registered
        const existingHospital = await Hospital.findOne({ ID });
        if (existingHospital) {
            throw new ApiError(409, "Hospital is already registered");
        }

        // Create a new hospital document and save it
        const hospital = await Hospital.create({
            Name,
            address,
            Contact,
            ID // Link the hospital to the corresponding user
        });

        return res.status(201).json(
            new ApiResponse(200, "Your Hospital is Successfully Registered")
        );
    } catch (error) {
        // Handle any potential errors
        throw new ApiError(500, "Failed to register hospital");
    }
});

export { HospitalRegistration };