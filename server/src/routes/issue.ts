import { Router } from 'express';
import { OK, UNAUTHORIZED } from 'http-status-codes';
import { UserInterface, UserModel, IssueModel } from '@models';

/**
 * Issues Router
 */
export const issue = Router()

    .get('/issues', (req, res) => {
        IssueModel.find({})
            .then(data => {
                res.send(data);
            })
    })

    .post('/issues', (req, res) => {
        IssueModel.insertMany([req.body])
            .then(data => {
                res.send(data);
            });
    })

    .put('/issues', (req, res) => {
        IssueModel.updateOne({ _id: req.body._id }, req.body)
            .then(data => {
                res.send(data);
            })
    })

    .delete('/issues', (req, res) => {
        IssueModel.deleteOne(req.body)
            .then(data => {
                res.send(data);
            })
    });


