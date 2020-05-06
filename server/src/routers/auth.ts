import { sign, verify } from '@shared/jwt';
import { RequestHandler, NextFunction, Request, Response } from 'express';
import { OK, UNAUTHORIZED } from 'http-status-codes';

/**
 * Information about the software.
 */
export const Authentication: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
        const _ = verify(req.cookies.token) && next();

    } catch (err) {
        res.send('invalid');
    }


}