import { Developer } from './Developer';


import { IIssue } from '../entities/IIssue';
import { IUser } from '@domain/entities/IUser';
import { IComment } from '../entities/IComment';
import { IIssueStatus } from '../entities/IIssueStatus';
import { ICanAssignIssue } from './ican/ICanAssignIssue';
import { UserModel } from '@domain/entities/IUser';
import { ICallback } from './ican/ICallback';
import { ICanCreateIssue, ICanCreateComment } from './ican/ICanCreate';
import { ICanDeleteIssue, ICanDeleteComment } from './ican/ICanDelete';
import { ICanViewIssue, ICanViewUser, ICanViewComment } from './ican/ICanView';
import { ICanUpdateIssue, ICanUpdateComment } from './ican/ICanUpdate';

export class ScrumMaster extends Developer 

// implements
//     ICanCreateIssue,
//     ICanDeleteIssue,
//     ICanViewIssue,
//     ICanUpdateIssue,

    // ICanViewUser,

//     ICanViewComment,
//     ICanCreateComment,
//     ICanDeleteComment,
//     ICanUpdateComment,

    // ICanAssignIssue 
    {

    


}