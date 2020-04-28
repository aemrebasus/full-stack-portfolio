import { Router } from 'express';
import { SERVER_INFORMATION, DEVELOPER_INFORMATION } from '@shared/constants';
import { OK, UNAUTHORIZED } from 'http-status-codes';

/**
 * Information about the software.
 */
export const information = Router()
    .get('/information', (req, res) => {
        res.send(SERVER_INFORMATION)
    })

    .get('/developer', (req, res) => {
        res.send(DEVELOPER_INFORMATION);
    })

    .post('/signin', (req, res) => {
        const { email, password } = req.body;
        if (email === 'username@email.com' && password === 'password') {
            res.cookie('token', 'YourToken')
                .status(OK)
                .send({msg:'Successfully signed in.'});
        } else {
            res.status(UNAUTHORIZED)
                .end();
        }
    })

    .get('/secret', (req, res) => {
        if (req.cookies.token === 'YourToken') {
            res.send({ msg: 'You are the king' });
        } else {
            res.send({ msg: 'You are not authorized' });
        }
    })