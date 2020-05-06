import { IRole } from './entities/IUser';
import { Admin } from './accesstypes/Admin';
import { ScrumMaster } from './accesstypes/ScrumMaster';
import { Developer } from './accesstypes/Developer';
import { Guest } from './accesstypes/Guest';

export class UserFactory {
    public static admin = new Admin();
    public static scrummaster = new ScrumMaster();
    public static developer = new Developer();
    public static guest = new Guest();


    static getUser(role: IRole | undefined): Developer | ScrumMaster | Guest | Admin {
        switch (role) {
            case 'admin':
                return UserFactory.admin;
            case 'developer':
                return UserFactory.developer;
            case 'guest':
                return UserFactory.guest;
            case 'scrummaster':
                return UserFactory.scrummaster;
            default:
                return UserFactory.guest;
        }

    }
}


export const admin = UserFactory.admin;
export const scrummaster = UserFactory.scrummaster;
export const developer = UserFactory.developer;
export const guest = UserFactory.guest;