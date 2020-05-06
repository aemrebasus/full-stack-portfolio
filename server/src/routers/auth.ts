import { sign, verify } from '@shared/jwt';
import { RequestHandler, NextFunction, Request, Response } from 'express';
import { OK, UNAUTHORIZED } from 'http-status-codes';
import { UserFactory } from '@domain/UserFactory';

/**
 * Information about the software.
 */
export const Authentication: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
        verify(req.cookies.token)
            .then(user => {
                res.locals.user = UserFactory.getUser(user.role);
                res.locals.orgId = user.organizationId;
                res.locals.userId = user._id;
                res.locals.role = user.role;
                res.locals.email = user.email;

                next();
            })
            .catch(err => {
                res.status(UNAUTHORIZED)
                    .end('Please sign in');
            })

    } catch (err) {
        res.status(UNAUTHORIZED)
            .send('Please sign in');
    }
}