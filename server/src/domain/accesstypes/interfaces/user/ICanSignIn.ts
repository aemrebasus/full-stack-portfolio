export interface ICanSignIn<TCredential = { email: string, password: string }, TReturn = any> {
    signIn(credentials: TCredential, callback: (response: TReturn) => void): Promise<TReturn>;
    signOut(credentials: TCredential, callback: (response: TReturn) => void): Promise<TReturn>;
}