import mongoose, {Schema} from "mongoose";

const patientSchema = new Schema({
    Name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    },
    Contact:{
        type: Number,
    },
    weight:{
        type:   Number,
        required: true,
    },
    height:{
        type:   Number,
        required: true,
    },
    Blood_Group:{
        type : String,
        required: true, 
    },
    Sex:{
        type: String,
        enum : ['M','F','O'],
    },
    Report:{
        type: String,
    }
},{
    timestamps: true,
});



export const Patient = mongoose.model('Patient',patientSchema);