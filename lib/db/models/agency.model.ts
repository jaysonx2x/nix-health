import { model, models, Schema } from "mongoose";

export interface Agency extends Document {
    agencyCode: string;
    agencyName: string;
    createdAt: Date;
    updatedAt: Date;
}


const AgencySchema = new Schema({
    agencyCode: { type: String, required: true },
    agencyName: { type: String, required: true },
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now },
});


const Agency = models?.Agency || model('Agency', AgencySchema);

export default Agency;