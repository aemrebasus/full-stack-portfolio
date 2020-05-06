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
            .send('Unauthorized!')
    }

}

const router = Router()


    .get('/all', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewAllComments(orgId), req, res);
    })

    .get('/id/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewCommentById(orgId, req.params.id), req, res)
    })

    .get('/status/:status', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewAllComments(orgId), req, res)
    })

    .get('/comment/:issueId', (req, res) => {
        helper((orgId: string, user: Admin) => user.viewAllCommentsOfMyIssue(orgId, res.locals.userId, req.params.issueId), req, res)
    })


    .put('/comment/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.updateCommentById(orgId, req.params.id, { ...req.body, organizationId: orgId }), req, res);
    })


    .post('/create/own', (req, res) => {
        helper((orgId: string, user: Admin) => user.createNewCommentOnMyIssue(orgId, res.locals.userId, { ...req.body, organizationId: orgId }), req, res);
    })

    .post('/create', (req, res) => {
        helper((orgId: string, user: Admin) => user.createNewComment({ ...req.body, organizationId: orgId }), req, res)
    })







    .delete('/delete/own', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteOwnComment(orgId, res.locals.userId, req.body), req, res);
    })

    .delete('/delete/own/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteOwnCommentById(orgId, res.locals.userId, req.params.id), req, res);
    })

    .delete('/comment', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteComment(orgId, { ...req.body, organizationId: orgId }), req, res);
    })

    .delete('/id/:id', (req, res) => {
        helper((orgId: string, user: Admin) => user.deleteCommentById(orgId, req.params.id), req, res);
    })





export const CommentRouter = Router()
    .use('/comments', Authentication)
    .use('/comments', router);