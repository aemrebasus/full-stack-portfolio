import { Router } from 'express';
import { Authentication } from './middlewares/auth';
import { Admin } from '@domain/accesstypes/Admin';
import { SubscriptionCheck } from './middlewares/subscription';

import { GetHelper, CreateHelper, DeleteHelper } from './helpers/RequestHelpers';



const router = Router()

    .get('/all', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewAllComments(orgId), res);
    })

    .get('/id/:id', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewIssueById(orgId, req.params.id), res)
    })

    // check subscription
    .use('/create', SubscriptionCheck)
    .post('/create', (req, res) => {
        CreateHelper((orgId: string, user: Admin) => user.createNewIssue({ ...req.body, organizationId: orgId }), res)
    })



    .delete('/id/:id', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteIssueById(orgId, req.params.id), res);
    })

    .delete('/project', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteIssue({ ...req.body, organizationId: orgId }), res);
    })






export const ProjectRouter = Router()
    .use('/projects', Authentication)
    .use('/projects', router);