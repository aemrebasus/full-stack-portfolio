import { Router, Response } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';


const router = Router()

    .get('/all', (req, res) => {
        res.send('Allll')
    })





export const UserRouter = Router().use('/users', router);