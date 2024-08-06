import { model, models, Schema } from "mongoose";

export interface Patient extends Document {
    agencyId: {
        _id: string,
        agencyCode: String,
        agencyName: String,
    }; 
    medicalRecordId: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    suffix?: string;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}

const PatientSchema = new Schema({
    agencyId: { type: Schema.Types.ObjectId, ref: 'Agency' },
    medicalRecordId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String },
    suffix: { type: String },
    status: { type: Number, required: true, default: 1 },
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now },
});


const Patient = models?.Patient || model('Patient', PatientSchema);

export default Patient;