import { Router, Response, Request } from 'express';
import { Authentication } from './middlewares/auth';
import { Admin } from '@domain/accesstypes/Admin';
import { SubscriptionCheck } from './middlewares/subscription';
import logger from '@shared/Logger';
import { GetHelper, CreateHelper } from './helpers/RequestHelpers';



const router = Router()

    .get('/all', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewAllProjects(orgId), res);
    })

    // .get('/id/:id', (req, res) => {
    //     // helper((orgId: string, user: Admin) => user.viewProjectById(orgId, req.params.id), req, res)
    // })

    // Check subscription
    .use('/create', SubscriptionCheck)
    .post('/create', (req, res) => {
        CreateHelper((orgId: string, user: Admin) => user.createProject({ ...req.body, organizationId: orgId }), res);
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