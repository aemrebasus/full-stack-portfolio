import { Router, Response, Request } from 'express';
import { Authentication } from './middlewares/auth';
import { Admin } from '@domain/accesstypes/Admin';
import { GetHelper, UpdateHelper, CreateHelper, DeleteHelper } from './helpers/RequestHelpers';


const router = Router()


    .get('/all', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewAllComments(orgId), res);
    })

    .get('/id/:id', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewCommentById(orgId, req.params.id), res)
    })

    .get('/status/:status', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewAllComments(orgId), res)
    })

    .get('/comment/:issueId', (req, res) => {
        GetHelper((orgId: string, user: Admin) => user.viewAllCommentsOfMyIssue(orgId, res.locals.userId, req.params.issueId), res)
    })


    .put('/comment/:id', (req, res) => {
        UpdateHelper((orgId: string, user: Admin) => user.updateCommentById(orgId, req.params.id, { ...req.body, organizationId: orgId }), res);
    })


    .post('/create/own', (req, res) => {
        CreateHelper((orgId: string, user: Admin) => user.createNewCommentOnMyIssue(orgId, res.locals.userId, { ...req.body, organizationId: orgId }), res);
    })

    .post('/create', (req, res) => {
        CreateHelper((orgId: string, user: Admin) => user.createNewComment({ ...req.body, organizationId: orgId }), res)
    })







    .delete('/delete/own', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteOwnComment(orgId, res.locals.userId, req.body), res);
    })

    .delete('/delete/own/:id', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteOwnCommentById(orgId, res.locals.userId, req.params.id), res);
    })

    .delete('/comment', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteComment(orgId, { ...req.body, organizationId: orgId }), res);
    })

    .delete('/id/:id', (req, res) => {
        DeleteHelper((orgId: string, user: Admin) => user.deleteCommentById(orgId, req.params.id), res);
    })





export const CommentRouter = Router()
    .use('/comments', Authentication)
    .use('/comments', router);