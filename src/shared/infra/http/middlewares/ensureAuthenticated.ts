import { NextFunction, Request, Response } from 'express';
import { Unauthorized } from '../../../errors';
import { googleOAuth } from '../../../container/providers/OAuth';
import { AccountsRepository } from '../../../../modules/accounts/repositories/implementations';
import { OAuth2Client } from 'google-auth-library';

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

    const googleOAuth = new OAuth2Client(
      '984868387038-7ni62h613e8df34am1tv4pqfm5mf37dq.apps.googleusercontent.com'
    );
    const ticket = await googleOAuth.verifyIdToken({
      idToken: token,
    });
    const tokenPayload = ticket.getPayload();

    if (!tokenPayload) {
      return response.status(401).json({
        message: 'Invalid Token!',
      });
    }

    const { sub } = tokenPayload;

    const accountsRepository = new AccountsRepository();
    const user = await accountsRepository.findBySocialId(sub);
    console.log('CRIOU RESPOSITORIO', user);

    if (!user) {
      return response.status(401).json({
        message: 'User does not exists!',
      });
    }

    request.user = {
      id: user.id,
    };
    next();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid Token!',
    });
  }
}

export { ensureAuthenticated };
