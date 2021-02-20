import { NextFunction, Request, Response } from 'express';

// next is required for error middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};

export default errorHandler;
