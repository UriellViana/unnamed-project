<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
import { NextFunction, Request, Response } from 'express';

interface Error {
  name: string;
  message: string;
}

export default function errorMiddleware(
  err: Error,
  _req: Request,
<<<<<<< HEAD
=======
=======
>>>>>>> changes
import { Request, Response, NextFunction } from 'express';

export default function errorMiddleware(
  err,
  req: Request,
<<<<<<< HEAD
>>>>>>> changes
=======
>>>>>>> Back-End Review
=======
>>>>>>> changes
  res: Response,
  next: NextFunction
) {
  if (err.name === 'UnauthorizedError')
    return res.status(401).json({ error: err.name, message: 'JWT Expired.' });

  return res.status(500).json({ error: err.name, message: err.message });
}
