import { NextFunction, Request, Response } from 'express';
import { Unauthorized } from '../../../errors';
import { googleOAuth } from '../../../container/providers/OAuth';
import { AccountsRepository } from '../../../../modules/accounts/repositories/implementations';

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new Unauthorized('Token is missing');
    }

    const [, token] = authorization.split(' ');

    const tokenPayload = await googleOAuth.verify(token);

    if (!tokenPayload) {
      throw new Unauthorized('Invalid token');
    }

    const { sub } = tokenPayload;

    const accountsRepository = new AccountsRepository();
    const user = await accountsRepository.findById(sub);

    if (!user) {
      throw new Unauthorized('User does not exists');
    }

    request.user = {
      id: sub,
    };
    next();
  } catch (error) {
    throw new Unauthorized('Invalid token');
  }
}

export { ensureAuthenticated };
