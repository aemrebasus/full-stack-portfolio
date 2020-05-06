import { Router } from 'express';
import { UserFactory } from '@domain/UserFactory';




/**
 * Information about the software.
 */
export const Sign = Router()

    .post('/signin', (req, res) => {
        UserFactory.developer.signIn(req.body)
            .then(token => {
                res.cookie('token', token)
                    .end();
            })
            .catch(err => {
                res.send(err);
            })
    })

    .get('/signout', (req, res) => {
        res.cookie('token', '')
            .end();
    })

    .post('/signup', async (req, res) => {
        UserFactory.guest.signUp(req.body)
            .then(token => {
                res.cookie('token', token)
                    .end();
            })
            .catch(err => {
                res.send(err);
            })
    })
