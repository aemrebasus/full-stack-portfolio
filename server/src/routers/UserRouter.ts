import { Router, Response, Request } from 'express';
import { Authentication } from './auth';
import { Admin } from '@domain/accesstypes/Admin';
import { UNAUTHORIZED, OK } from 'http-status-codes';

function helper(func: (orgId: string, user: Admin) => Promise<any>, req: Request, res: Response) {
    try {
        func(res.locals.orgId, (res.locals.user as Admin))
            .then(data => {
                res.status(OK)
                    .send(data);
            })
            .catch(err => {
                res.status(UNAUTHORIZED)
                    .send(err);
            })

    } catch (err) {
        res.status(UNAUTHORIZED)
            .send('Unautorized')
    }

}

const router = Router()

    .get('/all', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewAllUsers(orgId), req, res);
    })

    .get('/id/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewUserById(orgId, req.params.id), req, res)
    })

    .get('/email/:email', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewUserByEmail(orgId, req.params.email), req, res)
    })

    .get('/self', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewMyself(res.locals.email), req, res)
    })




    .post('/create', (req, res) => {
        helper((orgId: string, user: Admin) => user.createNewUser({ ...req.body, organizationId: orgId }), req, res)
    })






    .delete('/id/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteUserById(orgId, req.params.id), req, res);
    })

    .delete('/user', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteUser({ ...req.body, organizationId: orgId }), req, res);
    })





export const UserRouter = Router()
    .use('/users', Authentication)
    .use('/users', router);