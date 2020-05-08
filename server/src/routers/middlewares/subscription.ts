import { verify } from '@shared/jwt';
import { RequestHandler, NextFunction, Request, Response } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';
import { SubscriptionModel, ISubscription } from '@domain/entities/ISubscription';
import { UserModel } from '@domain/entities/IUser';
import { IssueModel } from '@domain/entities/IIssue';
import logger from '@shared/Logger';
import { Error } from 'mongoose';

/**
 * Information about the software.
 */
export const SubscriptionCheck: RequestHandler = (req: Request, res: Response, next: NextFunction) => {

    if (process.env.NODE_ENV === 'production')
        verify(req.cookies.token)
            .then(async user => {
                const subs = await SubscriptionModel.findOne({ organizationId: user.organizationId });
                const userCount = await UserModel.count({ organizationId: user.organizationId });
                const issueCount = await IssueModel.count({ organizationId: user.organizationId });
                return Promise.all([
                    subs, userCount, issueCount
                ])
            }).then(results => {
                if (results[0]?.userLimit! > results[1] && results[0]?.issueLimit! > results[2]) {
                    next();
                } else {
                    const error = new Error('Your subscription does not allow us to create a new user!');
                    logger.error(error);
                    res.end(error.message);
                }
            })
            .catch(err => {
                const error = new Error('Un expected error happened!');
                logger.error(`${error}\n\b${error.stack}`);
                res
                    .end(error.message)
            })
    else {
        next();
    }

}

