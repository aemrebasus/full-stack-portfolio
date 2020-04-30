import { Router } from 'express';
import { OK, UNAUTHORIZED } from 'http-status-codes';
import { UserInterface,  UserModel } from '@models';

/**
 * Issues Router
 */
export const user = Router()

    .get('/users', (req, res) => {
        UserModel.find({})
            .then(data => {
                res.send(data);
            })
    })

    .post('/users', (req, res) => {
        UserModel.insertMany([req.body])
            .then(data => {
                res.send(data);
            });
    })

    .put('/users', (req, res) => {
        UserModel.updateOne({ _id: req.body._id }, req.body)
            .then(data => {
                res.send(data);
            })
    })

    .delete('/users', (req, res) => {
        UserModel.deleteOne(req.body)
            .then(data => {
                res.send(data);
            })
    });


