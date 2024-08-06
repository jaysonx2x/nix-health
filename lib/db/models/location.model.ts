import { model, models, Schema } from "mongoose";

export interface Location extends Document {
    ownerId: string;
    ownerType: string;
    address1: string;
    city: string;
    state: string;
    zip: string;
    phoneNo1?: string;
    phoneNo2?: string;
    email?: string;
    createdAt: Date;
    updatedAt: Date;
}


const LocationSchema = new Schema({
    ownerId: { type: String, required: true },
    ownerType: { type: Number, required: true, default: 1 },
    address1: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    phoneNo1: { type: String },
    phoneNo2: { type: String },
    email: { type: String },
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now },
});


const Location = models?.Location || model('Location', LocationSchema);

export default Location;