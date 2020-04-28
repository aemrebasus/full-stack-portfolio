import { mongoose, Schema, Document } from '@mongo';

/**
 * User interface
 */
export interface IUser {
    _id?: any,
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: string;
    organization?: string;
}




/**
 * User document class
 */
export class DUser extends Document implements IUser {
    constructor(public firstName: string, public lastName: string, public email: string, public role: string, public organization: string) {
        super();
    }
}

/**
 * User Schema
 */
export const SUser = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String },
    organization: { type: String, required: true }
});


/**
 * User Model
 */
export const MUser = mongoose.model<DUser>('users', SUser);



