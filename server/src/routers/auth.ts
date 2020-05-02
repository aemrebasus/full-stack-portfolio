import { Router } from 'express';
import { sign } from '@shared/jwt';

/**
 * Information about the software.
 */
export const Auth = Router();

Auth.post('/signin', (req, res) => {
    const { email, password } = req.body;

    if (email === 'email' && password === 'password') {
        const token = sign({ email, password, role: 'developer' });
        res.cookie('token', token)
            .send('Successfully signed in');
    } else {

        res.send('Not Signed in');

    }
})
