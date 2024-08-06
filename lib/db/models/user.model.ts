import { model, models, Schema } from "mongoose";

export interface User extends Document {
    agencyId?: {
        _id: string,
        agencyCode: string,
        agencyName: string,
    }; 
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstName?: string;
    lastName?: string;
    userType: Number;
    createdAt: Date;
    updatedAt: Date;
}


const UserSchema = new Schema({
    agencyId: { type: Schema.Types.ObjectId, ref: 'Agency' },
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    userType: { type: Number, required: true, default: 1 },
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now },
});


const User = models?.User || model('User', UserSchema);

export default User;