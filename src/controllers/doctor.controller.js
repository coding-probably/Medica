import {asyncHandler} from '../utils/asyncHandeler.js';
import {ApiError} from '../utils/ApiError.js';
import {Doctor} from '../models/doctor.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';


const DoctorRegistration = asyncHandler(
    async(req,res)=>{
        
        const {Name, address, registration_number, department, experience, doctorPic, work_in_Hospital,qualifications} = req.body;  // Step 1

        if(Name === ""){
            throw new ApiError(400, "Name is required");
        }
        if(address== ""){
            throw new ApiError(400, "address is required");
        }
        if(registration_number == ""){
            throw new ApiError(400, "registrationnumber is required");
        }
        if(department == ""){
            throw new ApiError(400, "department is required");
        }
        if(experience == ""){
            throw new ApiError(400, "experience is required");
        }



        const ExistedUser = await Doctor.findOne({ registration_number });

        if(ExistedUser){
            throw new ApiError(409, "Doctor already exist with given registration number");
        }



    const user = await Doctor.create({    
        Name,
        address,
        experience,
        registration_number,
        department,
        qualifications,
        work_in_Hospital
    })

    return res.status(201).json(
        new ApiResponse(200, "Doctor is Successfully Registered")
    )
 });


 export {DoctorRegistration};