import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
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
    ID:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true,
});



export const Hospital = mongoose.model('Hospital',userSchema);