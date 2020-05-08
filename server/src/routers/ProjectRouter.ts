import { Router, Response, Request } from 'express';
import { Authentication } from './middlewares/auth';
import { Admin } from '@domain/accesstypes/Admin';
import { UNAUTHORIZED, OK } from 'http-status-codes';
import { SubscriptionCheck } from './middlewares/subscription';
import logger from '@shared/Logger';
import { Error } from 'mongoose';

function helper(func: (orgId: string, user: Admin) => Promise<any>, req: Request, res: Response) {
    try {
        func(res.locals.orgId, (res.locals.user as Admin))
            .then(data => {
                res.status(OK)
                    .send(data);
            })
            .catch(err => {
                logger.error(err.message)
                res.status(UNAUTHORIZED)
                    .end(err.message);
            })

    } catch (err) {
        res.status(UNAUTHORIZED)
            .end('Unauthorized!')
    }

}

const router = Router()

    .get('/all', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewAllProjects(orgId), req, res);
    })

    // .get('/id/:id', (req, res) => {
    //     // helper((orgId: string, user: Admin) => user.viewProjectById(orgId, req.params.id), req, res)
    // })

    // Check subscription
    .use('/create', SubscriptionCheck)
    .post('/create', (req, res) => {
        helper((orgId: string, user: Admin) => user.createProject({ ...req.body, organizationId: orgId }), req, res);
    })



    // .put('/update/id/:id', (req, res) => {
    //     helper((orgId: string, user: Admin) => user.updateUserById(orgId, req.params.id, { ...req.body, organizationId: orgId }), req, res);
    // })
    // .put('/update/email/:email', (req, res) => {
    //     helper((orgId: string, user: Admin) => user.updateUserByEmail(orgId, req.params.email, { ...req.body, organizationId: orgId }), req, res);
    // })


    // .delete('/delete/id/:id', (req, res) => {
    //     helper((orgId: string, user: Admin) => user.deleteUserById(orgId, req.params.id), req, res);
    // })

    // .delete('/delete/user', (req, res) => {
    //     helper((orgId: string, user: Admin) => user.deleteUser({ ...req.body, organizationId: orgId }), req, res);
    // });






export const ProjectRouter = Router()
    .use('/projects', Authentication)
    .use('/projects', router);