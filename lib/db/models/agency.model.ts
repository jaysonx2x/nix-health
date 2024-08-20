import { model, models, Schema } from "mongoose";

export interface Agency extends Document {
    agencyCode: string;
    agencyName: string;
    contactInfos: {
        address1: string;
        city: string;
        state: string;
        zip: string;
        phoneNo1: string;
        phoneNo2?: string; // Optional field
        email: string;
    };
    createdAt: Date;
    updatedAt: Date;
}


const AgencySchema = new Schema({
    agencyCode: { type: String, required: true },
    agencyName: { type: String, required: true },
    contactInfos: {
        address1: String,
        city: String,
        state: String,
        zip: String,
        phoneNo1: String,
        phoneNo2: String,
        email: String,
    },
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now },
});


const Agency = models?.Agency || model('Agency', AgencySchema);

export default Agency;