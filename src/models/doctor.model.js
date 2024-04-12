import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    Name:{
        type: String,
        required: true,
    },
    registration_number:{
        type: Number,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    qualifications:{
        type: String,
        required: true,
    },
    experience:{
        type: Number,
        default: 0,
    },
    address:{
        type: String,
    },
    doctorPic:{
        type: String,
    },
    work_in_Hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
},{
    timestamps: true,
});



export const Doctor = mongoose.model('Doctor',userSchema);