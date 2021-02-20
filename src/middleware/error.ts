import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};

export default errorHandler;
