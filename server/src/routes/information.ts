import { Router } from 'express';
import {SERVER_INFORMATION, DEVELOPER_INFORMATION } from '@shared/constants';

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