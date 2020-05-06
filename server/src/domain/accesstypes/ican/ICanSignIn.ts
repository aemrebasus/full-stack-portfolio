import { IOrganization } from '@domain/entities/IOrganization';
import { IUser } from '@domain/entities/IUser';

export interface ICredential {
    email: string;
    password: string;
}

export interface ICanSignIn<TCredential = ICredential, TReturn = IUser> {
    signIn(credentials: TCredential, callback?: (response: TReturn) => void): Promise<TReturn>;
}


export interface ICanSignUp<TSignUpForm = IOrganization, TReturn = IUser> {
    signUp(signUpForm: TSignUpForm, callback: (response: TReturn) => void): Promise<TReturn>;
}