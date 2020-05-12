import { Admin } from '@domain/accesstypes/Admin';
import { Response } from 'express';
import logger from '@shared/Logger';
import { OK, NOT_MODIFIED, CREATED, NOT_FOUND } from 'http-status-codes';

export function CreateHelper(func: (orgId: string, user: Admin) => Promise<any>, res: Response) {
    func(res.locals.orgId, (res.locals.user as Admin))
        .then(data => {
            res.status(CREATED)
                .send('Created successfully!');
        })
        .catch(err => {
            logger.error(err.message)
            res.status(NOT_MODIFIED)
                .end(err.message);
        })
}


export function DeleteHelper(func: (orgId: string, user: Admin) => Promise<any>, res: Response) {
    func(res.locals.orgId, (res.locals.user as Admin))
        .then(data => {
            res.status(OK)
                .send('Deleted successfully');
        })
        .catch(err => {
            logger.error(err.message)
            res.status(NOT_MODIFIED)
                .end(err.message);
        })


}
export function GetHelper(func: (orgId: string, user: Admin) => Promise<any>, res: Response) {
    func(res.locals.orgId, (res.locals.user as Admin))
        .then(data => {
            res.status(OK)
                .send(data);
        })
        .catch(err => {
            logger.error(err.message)
            res.status(NOT_FOUND)
                .end(err.message);
        })
}


export function UpdateHelper(func: (orgId: string, user: Admin) => Promise<any>, res: Response) {
    func(res.locals.orgId, (res.locals.user as Admin))
        .then(data => {
            res.status(OK)
                .send('Updated successfully!');
        })
        .catch(err => {
            logger.error(err.message)
            res.status(NOT_MODIFIED)
                .end(err.message);
        })
}


