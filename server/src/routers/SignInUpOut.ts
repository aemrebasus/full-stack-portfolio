import { Router } from 'express';
import { UserFactory } from '@domain/UserFactory';
import { IOrganization } from '@domain/entities/IOrganization';
import logger from '@shared/Logger';
import { Timeout } from './Timeout';

/**
 * Information about the software.
 */
export const SignInUpOut = Router()

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

    .use('/signup', Timeout(1000))
    .post('/signup', async (req, res) => {
        if (isOrganizationObject(req.body as IOrganization)) {
            UserFactory.guest.signUp(req.body)
                .then(token => {
                    res.cookie('token', token)
                        .end('Congrats! Thanks for choosing us.');
                })
                .catch(err => {
                    res.send(err);
                    logger.error(err);
                })
        } else {
            res.send('Please fill out the signup form!')
        }
    })



function isOrganizationObject(obj: object) {
    const org: IOrganization = { email: '', firstName: '', lastName: '', name: '', password: '' }

    return ('email' && 'firstName' && 'lastName' && 'name' && 'password') in obj;
}