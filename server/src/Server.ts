import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import 'express-async-errors';
import logger from '@shared/Logger';
import { routers } from 'src/routers';
import { BASE_ROUTE } from '@shared/constants';

/**
 * Initialize the express app.
 */
const app = express();

/**
 * Convert the response body into JSON.
 */
app.use(express.json());

/**
 * Extend the url encoding.
 */
app.use(express.urlencoded({ extended: true }));


/**
 * Parse cookies from the request header and store it to the cookie field in the response.
 */
app.use(cookieParser());


/**
 * if in development, display logs
 */
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

/**
 * Secure the routes against common cyber attacks.
 */
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

/**
 * Display the error message if error.
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});

app.use('/', express.static(path.join(__dirname, '../../client/dist/client')))


/**
 * Setup Routers.
 */
app.use(BASE_ROUTE, routers);


/**
 * Export the Express app
 */
export default app;
