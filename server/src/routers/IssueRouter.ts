import { Router } from 'express';
import { Authentication } from './middlewares/auth';
import { Admin } from '@domain/accesstypes/Admin';
import { SubscriptionCheck } from './middlewares/subscription';
import { GetHelper, CreateHelper, DeleteHelper } from './helpers/RequestHelpers';
import { IIssueStatus } from '@domain/entities/IIssueStatus';


const router = Router()


    .get('/all', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewAllIssues(orgId), res);
    })

    .get('/id/:id', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewIssueById(orgId, req.params.id), res)
    })

    .get('/status/:status', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewIssueByStatus(orgId, req.params.status as IIssueStatus), res)
    })


    .get('/myissues', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewMyAllIssues(orgId, res.locals.userId), res);
    })
    .get('/myissues/id/:id', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewMyIssueById(orgId, res.locals.userId, req.params.id), res)
    })

    .get('/myissues/status/:status', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewMyIssueByStatus(orgId, res.locals.userId, req.params.status as IIssueStatus), res)
    })


    // check subscription
    .use('/create', SubscriptionCheck)
    .post('/create', (req, res) => {
        CreateHelper((orgId: string, user: Admin) => user.createNewIssue({ ...req.body, organizationId: orgId }), res)
    })




    .post('/assign', (req, res) => {
        CreateHelper((orgId: string, user: Admin) => user.assignIssueToUser(orgId, req.body), res)
    })
    .post('/dessign', (req, res) => {
        CreateHelper((orgId: string, user: Admin) => user.dessignIssueFromUser(orgId, req.body), res)
    })





    .delete('/id/:id', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteIssueById(orgId, req.params.id), res);
    })

    .delete('/status/:status', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteIssueByStatus(orgId, req.params.status as IIssueStatus), res);
    })

    .delete('/issue', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteIssue({ ...req.body, organizationId: orgId }), res);
    })





export const IssueRouter = Router()
    .use('/issues', Authentication)
    .use('/issues', router);