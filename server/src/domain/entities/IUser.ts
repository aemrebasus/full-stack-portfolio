import { mongoose, Schema, Document } from '@mongo';
import { IID } from './IID';
import { ObjectId } from 'mongodb';

export type IRole = 'admin' | 'scrummaster' | 'developer' | 'guest';

const String = Schema.Types.String;

export interface IUser {
    _id?: IID
    firstName: string
    lastName: string;
    email: string;
    password: string;
    organizationId: IID;
    role: IRole
}


const UserSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String },
    organizationId: { type: ObjectId, required: true }
});


class UserDoc extends Document implements IUser {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public organizationId: string,
        public role: IRole,
    ) {
        super();
    }

}


export const UserModel = mongoose.model<UserDoc>('users', UserSchema);


