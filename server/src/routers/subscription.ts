import { sign, verify } from '@shared/jwt';
import { RequestHandler, NextFunction, Request, Response, response } from 'express';
import { OK, UNAUTHORIZED } from 'http-status-codes';
import { UserFactory } from '@domain/UserFactory';
import { OrganizationModel } from '@domain/entities/IOrganization';
import { SubscriptionModel } from '@domain/entities/ISubscription';
import { UserModel } from '@domain/entities/IUser';
import { IssueModel } from '@domain/entities/IIssue';

/**
 * Information about the software.
 */
export const SubscriptionCheck: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
        verify(req.cookies.token)
            .then(user => {
                res.locals.orgId = user.organizationId;
                res.locals.canAddUser = false;
                res.locals.canAddIssue = false;

                SubscriptionModel.findOne({ organizationId: user.organizationId })
                    .then(subs => {

                        return new Promise((resolve, reject) => {

                            if (subs) {

                                Promise.all([
                                    UserModel.count({ organizationId: user.organizationId })
                                        .then(userNumber => {
                                            res.locals.canAddUser = subs.userLimit > userNumber
                                        }),

                                    IssueModel.count({ organizationId: user.organizationId })
                                        .then(issueNumber => {
                                            res.locals.canAddIssue = subs.issueLimit > issueNumber;
                                        })
                                ]).then();
                            } else {
                                res.locals.canAddIssue = false;
                                res.locals.canAddUser = false;
                            }

                        })

                    })
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