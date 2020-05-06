import { Error } from 'mongoose';

const UserNotFound = new Error('User not found');
const IssueNotFOund = new Error('Issue not found');

const InvalidUser = new Error('Invalid Credentials');