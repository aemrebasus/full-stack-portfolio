import { mongoose, Schema, Document } from '@mongo';


/**
 * User interface
 */
export interface UserInterface {
    firstName?: string;
    lastName?: string;
    password?: string;
    email?: string;
    role?: string;
    organization?: string;
}


/**
 * User document class
 */
class UserDocument extends Document implements UserInterface {
    constructor(public firstName: string, public lastName: string, public email: string, public password: string, public role: string, public organization: string) {
        super();
    }
}

/**
 * User Schema
 */
const UserSchema = new Schema({
    firstName: { type: String, default: 'Not provided' },
    lastName: { type: String, default: 'Not provided' },
    email: { type: String, default: 'Not provided' },
    password: { type: String, default: 'Not Provided' },
    role: { type: String, default: 'Not provided' },
    organization: { type: String, default: 'Not provided' }
});


/**
 * User this model to create a user
 * #### Example
 * ```
 * const user:UserInterface = {
 * ...
 * }
 *
 * const newUser = new UserModel({
 *  ....
 * })
 *
 * newUser.save();
 *
 * ```
 */
export const UserModel = mongoose.model<UserDocument>('users', UserSchema);



