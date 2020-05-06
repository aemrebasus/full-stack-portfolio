import { Developer } from './Developer';
import { IUser } from '@domain/entities/IUser';
import { UserModel } from '@domain/entities/IUser';
import { ICallback } from './ican/ICallback';
import { ICanViewUser } from './ican/ICanView';

export class ScrumMaster extends Developer implements
    //     ICanCreateIssue,
    //     ICanDeleteIssue,
    //     ICanViewIssue,
    //     ICanUpdateIssue,

    ICanViewUser

// ICanViewComment,
//     ICanCreateComment,
//     ICanDeleteComment,
//     ICanUpdateComment,

// ICanAssignIssue 
{
    viewUser(user: IUser, callback?: ICallback<IUser | null> | undefined): Promise<IUser | null> {
        return UserModel.findOne({ email: user.email }).then(_user => _user);
    }
    viewUserById(organizationId: string, id: string, callback?: ICallback<IUser> | undefined): Promise<IUser | null> {
        return UserModel.findOne({ organizationId, _id: id }).then(user => user);
    }
    viewUserByEmail(organizationId: string, email: string, callback?: ICallback<IUser | null> | undefined): Promise<IUser | null> {
        return UserModel.findOne({ organizationId, email }).then(user => user);
    }
    viewAllUsers(organizationId: string, callback?: ICallback<IUser[]> | undefined): Promise<(IUser[])> {
        return UserModel.find({ organizationId }).then(users => users);

    }




}