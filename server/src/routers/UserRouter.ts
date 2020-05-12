import { Router } from 'express';
import { Authentication } from './middlewares/auth';
import { Admin } from '@domain/accesstypes/Admin';
import { SubscriptionCheck } from './middlewares/subscription';

import { GetHelper, CreateHelper, UpdateHelper, DeleteHelper } from './helpers/RequestHelpers';


const router = Router()

    .get('/all', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewAllUsers(orgId), res);
    })

    .get('/id/:id', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewUserById(orgId, req.params.id), res)
    })

    .get('/email/:email', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewUserByEmail(orgId, req.params.email), res)
    })

    .get('/self', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewMyself(res.locals.email), res)
    })


    // Check subscription
    .use('/create', SubscriptionCheck)
    .post('/create', (req, res) => {
        CreateHelper((orgId: string, user: Admin) => user.createNewUser({ ...req.body, organizationId: orgId }), res)
    })



    .put('/update/id/:id', (req, res) => {
        UpdateHelper((orgId: string, user: Admin) => user.updateUserById(orgId, req.params.id, { ...req.body, organizationId: orgId }), res);
    })
    .put('/update/email/:email', (req, res) => {
        UpdateHelper((orgId: string, user: Admin) => user.updateUserByEmail(orgId, req.params.email, { ...req.body, organizationId: orgId }), res);
    })


    .delete('/delete/id/:id', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteUserById(orgId, req.params.id), res);
    })

    .delete('/delete/user', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteUser({ ...req.body, organizationId: orgId }), res);
    });






export const UserRouter = Router()
    .use('/users', Authentication)
    .use('/users', router);