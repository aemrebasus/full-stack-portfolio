import { mongoose, Schema, Document } from '@mongo';
import { IUser } from '@domain/entities/IUser';


const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String },
    organizationId: { type: String, required: true }
})



export const UserModel = mongoose.model<IUser & Document>('users', UserSchema);
