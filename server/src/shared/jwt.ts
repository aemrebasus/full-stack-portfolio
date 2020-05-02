import jwt from 'jsonwebtoken';
import { salt } from 'src/secrets';
import { IUser } from '@domain/entities/IUser';
import { IRole } from '@domain/types/IRole';

export function sign(payload: object, options?: object): string {
    return jwt.sign(payload, salt, options)
}

export function verify(token: string): IUser | null {
    try {
        const user = jwt.verify(token, salt) as IUser
        return user;
    } catch (err) {
        return null;
    }
}

function isRoleMatch(token: string, role: IRole): boolean {
    const user = verify(token);
    if (user) {
        return user.role === role
    } else {
        return false;
    }
}

export function isAdmin(token: string): boolean {
    return isRoleMatch(token, 'admin');
}

export function isDeveloper(token: string): boolean {
    return isRoleMatch(token, 'developer');
}


export function isScrumMaster(token: string): boolean {
    return isRoleMatch(token, 'scrummaster')
}

export function isGuest(token: string): boolean {
    return isRoleMatch(token, 'guest');
}

