import { Request, Response } from 'express';

const errorHandler = (err: unknown, req: Request, res: Response) => {
    if (err) {
        res.status(500).json({ error: err });
    }
};

export default errorHandler;
