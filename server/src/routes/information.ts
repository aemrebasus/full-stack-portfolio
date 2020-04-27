import { Router } from 'express';
import { SERVER_NAME, DEVELOPER_NAME, START_DATE, END_DATE, DEVELOPMENT_STACK } from '@shared/constants';

/**
 * Information about the software.
 */
export const information = Router()
    .get('/information', (req, res) => {
        res.send({
            name: SERVER_NAME,
            author: DEVELOPER_NAME,
            date: {
                start: START_DATE,
                end: END_DATE
            },
            stack: DEVELOPMENT_STACK
        })
    });