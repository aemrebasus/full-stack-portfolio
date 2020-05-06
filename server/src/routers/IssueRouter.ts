import { Router, Response, Request } from 'express';
import { Authentication } from './auth';
import { Admin } from '@domain/accesstypes/Admin';
import { UNAUTHORIZED, OK } from 'http-status-codes';
import { IIssueStatus } from '@domain/entities/IIssueStatus';
import { SubscriptionCheck } from './subscription';

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
            .send('Unauthorized!')
    }

}

const router = Router()


    .get('/all', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewAllComments(orgId), req, res);
    })

    .get('/id/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewIssueById(orgId, req.params.id), req, res)
    })

    .get('/status/:status', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewIssueByStatus(orgId, req.params.status as IIssueStatus), req, res)
    })


    .get('/myissues', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewMyAllIssues(orgId, res.locals.userId), req, res);
    })
    .get('/myissues/id/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewMyIssueById(orgId, res.locals.userId, req.params.id), req, res)
    })

    .get('/myissues/status/:status', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewMyIssueByStatus(orgId, res.locals.userId, req.params.status as IIssueStatus), req, res)
    })

    // check subscription
    .use('/create', SubscriptionCheck)
    .post('/create', (req, res) => {
        if (res.locals.canAddIssue)
            helper((orgId: string, user: Admin) => user.createNewIssue({ ...req.body, organizationId: orgId }), req, res)
        else {
            res.send('Your subscription does not allow to add issue!')
        }
    })




    .post('/assign', (req, res) => {
        helper((orgId: string, user: Admin) => user.assignIssueToUser(orgId, req.body), req, res)
    })
    .post('/dessign', (req, res) => {
        helper((orgId: string, user: Admin) => user.dessignIssueFromUser(orgId, req.body), req, res)
    })





    .delete('/id/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteIssueById(orgId, req.params.id), req, res);
    })

    .delete('/status/:status', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteIssueByStatus(orgId, req.params.status as IIssueStatus), req, res);
    })

    .delete('/issue', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteIssue({ ...req.body, organizationId: orgId }), req, res);
    })





export const IssueRouter = Router()
    .use('/issues', Authentication)
    .use('/issues', router);