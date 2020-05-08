import { Request, Response, NextFunction } from 'express';
import { REQUEST_TIMEOUT } from 'http-status-codes';

class TimeoutCounter {
    public count: number = 0;
    constructor(res: Response, timeoutMs: number = 3000) {
        setInterval(() => {
            this.count++;
        })

        setTimeout(() => {
            if (this.count > 0) {
                res.status(REQUEST_TIMEOUT)
                    .end('Request timeout!');
            }
        }, timeoutMs)
    }
}

export const Timeout = (timeoutMS: number) => (req: Request, res: Response, next: NextFunction) => {
    const _ = new TimeoutCounter(res, timeoutMS);
    next();
}