import {asyncHandler} from '../utils/asyncHandeler.js';
import {ApiError} from '../utils/ApiError.js';
import {Patient} from '../models/patient.model.js'
import { ApiResponse } from '../utils/ApiResponse.js';
import {uploadonCloudinary} from '../utils/cloudinary.js';

const PatientRegistration = asyncHandler(async (req, res) => {
    const { Name, address, Contact, weight, height, Blood_Group, Sex,  } = req.body;

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
    if (!Sex) {
        throw new ApiError(400, "Sex is required");
    }
    const ReportLocalPath = req.files?.Report[0]?.path
    const Report = await uploadonCloudinary(ReportLocalPath)

    try{
        let patient = await Patient.findOne({ Name });
        // Create a new hospital document and save it
        if(!patient) {
         patient = await Patient.create({
            Name,
            address,
            Contact,
            weight,
            height,
            Blood_Group,
            Sex,
            Report: Report.url
        }); 
        return res.status(201).json(
            new ApiResponse(200, "Patient Deatils are Succesfully entered")
        );
    }
        else{
            throw new ApiError(400, "Patient Already Exists");
        }
    }
     catch (error) {
        // Handle any potential errors
        throw new ApiError(500, "Failed to register patient");
    }
});

export { PatientRegistration };