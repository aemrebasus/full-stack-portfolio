import { Router } from 'express';
import { SERVER_INFORMATION, DEVELOPER_INFORMATION } from '@shared/constants';
import { OK, UNAUTHORIZED } from 'http-status-codes';
import { UserInterface, UserModel } from 'src/models';

/**
 * Information about the software.
 */
export const information = Router()

    .get('/information', (req, res) => {
        res.send(SERVER_INFORMATION);
    })

    .get('/developer', (req, res) => {
        res.send(DEVELOPER_INFORMATION);
    })

    .post('/signin', (req, res) => {
        const { email, password } = req.body;
        if (email === 'username@email.com' && password === 'password') {
            res.cookie('token', 'YourToken')
                .status(OK)
                .send({ msg: 'Successfully signed in.' });
        } else {
            res.status(UNAUTHORIZED)
                .end();
        }
    })

    .get('/signout', (req, res) => {
        if (req.cookies.token === 'YourToken') {
            res.cookie('token', 'signout')
                .status(OK)
                .send({ msg: 'Successfully signed out.' })
        } else {
            res.status(OK)
                .send({ msg: 'You are already signed out!' });
        }
    })

    .get('/secret', (req, res) => {
        if (req.cookies.token === 'YourToken') {
            res.send({ msg: 'You are the king' });
        } else {
            res.status(UNAUTHORIZED)
                .send({ msg: 'You are not authorized' });
        }
    })

    .get('/users/currentuser', (req, res) => {
        if (req.cookies.token === 'YourToken') {
            const user: UserInterface = {
                firstName: 'Ahmet',
                lastName: 'Emrebas',
                email: 'aemrebasus@gmail.com',
                password: '21231231',
                organization: 'TechBig',
                role: 'Admin'
            };
            res.status(OK)
                .send(user);
        } else {
            res.status(UNAUTHORIZED)
                .send({ msg: 'You did not sign in.' });
        }
    })


    .get('/add', (req, res) => {
        new UserModel({
            firstName: 'Ahmet',
            lastName: 'Emrebas',
            email: 'aemrebasus@gmail.com',
            role: 'Admin',
            organization: 'Techbig'
        })
            .save();
    })


