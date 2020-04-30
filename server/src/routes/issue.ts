import { Router } from 'express';
import { IssueModel } from '@models';
import logger from '@shared/Logger';

/**
 * Issues Router
 */
export const issue = Router()

    .get('/issues', (req, res) => {
        IssueModel.find({})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err.message)
                logger.error(err.message);
            })
    })

    .post('/issues', (req, res) => {
        IssueModel.insertMany([req.body])
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err.message)
                logger.error(err.message);
            })
    })

    .put('/issues', (req, res) => {
        IssueModel.updateOne({ _id: req.body._id }, req.body)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err.message)
                logger.error(err.message);
            })
    })

    .delete('/issues/:id', (req, res) => {
        IssueModel.deleteOne({ _id: req.params.id })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send("NOTE ...")
                logger.error(err.message);
            })
    });


