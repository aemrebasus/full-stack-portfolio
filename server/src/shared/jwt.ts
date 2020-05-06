import jwt from 'jsonwebtoken';
import { salt } from 'src/secrets';
import bcrypt from 'bcrypt'
import { IUser, } from '@domain/entities/IUser';



export function hashPassword(password: string) {
    return bcrypt.genSalt(7).then((slt) => {
        return bcrypt.hash(password, slt);;
    })
}

export function verifyPassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword)

}



export function sign(payload: IUser): Promise<string> {
    return new Promise((res, rej) => {
        try {
            const token = jwt.sign({
                email: payload.email,
                role: payload.role,
                organizationId: payload.organizationId
            }, salt);

            res(token);
        } catch (err) {
            console.log(err);
            rej('COuld not make it');
        }
    });
}

export function verify(token: string): Promise<IUser> {
    return new Promise((res, rej) => {
        try {
            const user = jwt.verify(token, salt) as IUser
            res(user);
        } catch (err) {
            rej('Could not verify the user');
        }
    });
}


