import { NextFunction, Request, Response } from 'express';
import { env } from '../helpers';
import * as jwt from 'jsonwebtoken';

interface Session {
  auth: {
    id: string;
    iat: number;
    exp: number;
  };
}

export default async function jwtMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // console.log('ERRO JWT ----------- ', req.headers)
  const { authorization } = req.headers;
  const bearerRegex = /^Bearer\s/i;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const isAuthorized = bearerRegex.test(authorization);

  if (isAuthorized) {
=======
  // testa de se o Bearer no Header
=======

>>>>>>> removing comments
=======
  // testa de se o Bearer no Header
>>>>>>> Update Role
=======

>>>>>>> removing comments
  if (bearerRegex.test(authorization)) {
>>>>>>> Update Role
    const token = authorization.split(bearerRegex)[1];

    try {
      (req as Request & Session).auth = await jwt.verify(
        token,
        env.getOrThrow('JWT_SECRET')
      );
    } catch (err) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      console.error('jwt', err);
=======
      console.error(err);
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'JWT Expired.' });
      } else if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Invalid JWT.' });
      } else {
        return res.status(401).json({ error: 'Unauthorized.' });
      }
    }
  }

  return next();
}
