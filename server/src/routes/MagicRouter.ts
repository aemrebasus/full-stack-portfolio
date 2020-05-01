import { Router, Response, NextFunction, Request } from 'express';
import { Model, Document, Schema } from 'mongoose';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import logger from '@shared/Logger';
import jwt from 'jsonwebtoken';
import { salt } from 'src/secrets';
import { IUser } from '@domain/entities/IUser';

type AccessType = 'ADMIN' | 'OWNER' | 'MEMBER' | 'GUEST';

const AccessControllers = {
    'ADMIN': (req: Request, res: Response, next: NextFunction) => {
        const user = jwt.verify(req.cookies.token, salt) as IUser;
        if (user.role?.toLowerCase() === 'admin') {
            next();
        } else {
            res.send('Unautorized');
        }
    }
}


type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';


type AuthorizationItem = { path: string, condition: object | null, method: MethodType, access: AccessType };


interface AuthorizationMap<T extends Document> {
    routes: AuthorizationItem[];
    model: Model<T>;
}

export class MagicRouter<T extends Document> {

    private _router: Router = Router();

    constructor(private map: AuthorizationMap<T>) { }

    toRouter() {
        return this._router;
    }

    build() {
        const model = this.map.model;
        const routes = this.map.routes;

        routes.forEach(route => {
            switch (route.method) {
                case 'GET':


            }

        })
    }
}





