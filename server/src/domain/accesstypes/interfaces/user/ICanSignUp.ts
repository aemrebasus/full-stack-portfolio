export interface ICanSignUp<TSignUpForm = {
    firstName: string,
    lastName: string,
    email: string,
    organizationName: string
}, TReturn = any> {
    signUp(signUpForm: TSignUpForm, callback: (response: TReturn) => void): Promise<TReturn>;
}