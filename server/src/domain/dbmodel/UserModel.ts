import { mongoose, Schema } from '@mongo';


const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String },
    organizationId: { type: String, required: true }
})

export const UserModel = mongoose.model('users', UserSchema);
