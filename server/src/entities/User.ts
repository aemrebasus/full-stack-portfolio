import { mongoose, Schema, Document } from '@mongo';

export const PreUserSchema = {
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    organization: String
}


/**
 * User interface
 */
export interface UserInterface {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    organization: string;
}


/**
 * User document class
 */
export class UserDocument extends Document implements UserInterface {
    constructor(public firstName: string, public lastName: string, public email: string, public role: string, public organization: string) {
        super();
    }
}

/**
 * User Schema
 */
export const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String },
    organization: { type: String, required: true }
});


/**
 * User Model
 */
export const UserModel = mongoose.model<UserDocument>('users', UserSchema);



