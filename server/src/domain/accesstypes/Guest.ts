import { ICanSignUp } from './interfaces/user/ICanSignUp';

export class Guest implements ICanSignUp {
    signUp(signUpForm: { firstName: string; lastName: string; email: string; organizationName: string; }, callback: (response: any) => void): Promise<any> {
        throw new Error('Method not implemented.');
    }

}