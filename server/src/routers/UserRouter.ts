import { Router, Response } from 'express';
import { admin, developer, guest, scrummaster } from '@domain/UserFactory';
import { verify, isAdmin } from '@shared/jwt';
import { UNAUTHORIZED } from 'http-status-codes';



// get
const GET_ALL_USERS = { path: '/users/get/all', user: scrummaster };
const GET_USER_BY_ID = { path: '/users/get/id/:id', user: scrummaster };
const GET_USER_BY_EMAIL = { path: '/users/get/email/:email', user: scrummaster };


// post
const POST_ONE_USER = { path: '/users/post/one', user: admin }
const POST_MANY_USER = { path: '/users/post/many', user: admin }



// put
const PUT_USER_BY_ID = { path: '/users/put/id/:id', user: admin }
const PUT_USER_BY_EMAIL = { path: '/users/put/email/:email', user: admin }


// delete
const DELTE_USER_BY_ID = { path: '/users/delete/id/:id', user: admin };
const DELETE_USER_BY_EMAIL = { path: '/users/delete/email/:email', user: admin };


export const UserRouter = Router();

UserRouter
    .get(GET_ALL_USERS.path, (req, res) => {
        if (isAdmin(req.cookies.token)) {
            GET_ALL_USERS.user.viewAllUsers().then(data => {
                res.send(data);
            })
        } else {
            unauthorized(res);
        }
    })





function unauthorized(res: Response) {
    res.status(UNAUTHORIZED)
        .end();
}