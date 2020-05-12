import { Router } from 'express';
import { UserFactory } from '@domain/UserFactory';
import { IOrganization } from '@domain/entities/IOrganization';
import logger from '@shared/Logger';
import { Timeout } from './middlewares/Timeout';
import { OK, UNAUTHORIZED, NOT_ACCEPTABLE, NOT_FOUND, NOT_MODIFIED } from 'http-status-codes';

/**
 * Information about the software.
 */
export const SignInUpOut = Router()

    .post('/signin', (req, res) => {
        UserFactory.developer.signIn(req.body)
            .then(token => {
                res.cookie('token', token)
                    .send('Congrats! Successfully signed in.');
            })
            .catch(err => {
                res.status(NOT_ACCEPTABLE)
                    .end('Could not sign in');
            })
    })

    .get('/signout', (req, res) => {
        res.cookie('token', '')
            .status(OK)
            .send('See you later!');
    })

    .use('/signup', Timeout(1000))
    .post('/signup', async (req, res) => {
        console.log(req.body);
        const validation = validateSignUpForm(req.body);
        if (validation.status) {
            UserFactory.guest
                .signUp(req.body)
                .then(token => {
                    res.cookie('token', token)
                        .status(OK)
                        .send('Congrats! Thanks for choosing us.');
                })
                .catch(err => {
                    logger.error(err);
                    res.status(NOT_MODIFIED)
                        .end(err);
                })
        } else {
            console.log(req.body);
            res.status(NOT_ACCEPTABLE)
                .end(validation.errors);
        }
    })



function validateSignUpForm(obj: object) {
    const errors: string[] = []
    const fields = ['firstName', 'lastName', 'email', 'name', 'password']
    fields.forEach(f => {
        if (!(f in obj))
            errors.push(`Please type your ${f}`)
    });
    return {
        status: !(errors.length > 0),
        errors
    }
}