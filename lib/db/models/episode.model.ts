import { model, models, Schema } from "mongoose";

export interface Episode extends Document {
    patientId: {
        _id: string,
        medicalRecordId: String,
        firstName: String,
        lastName: String,
    }; 
    startDate: Date;
    endDate: Date;
    status: Number;
    createdAt: Date;
    updatedAt: Date;
}


const EpisodeSchema = new Schema({
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient' },
    startDate: {type: Date, required: true },
    endDate: {type: Date, required: true },
    status: { type: Number, required: true, default: 1 },
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now },
});


const Episode = models?.Episode || model('Episode', EpisodeSchema);

export default Episode;