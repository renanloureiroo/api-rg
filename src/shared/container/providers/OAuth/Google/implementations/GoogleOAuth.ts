import { OAuth2Client } from 'google-auth-library';
import { IGoogleOAuth } from '../IGoogleOAuth';

class GoogleOAuth implements IGoogleOAuth {
  private readonly googleClient: OAuth2Client;

  constructor() {
    this.googleClient = new OAuth2Client(
      '984868387038-7ni62h613e8df34am1tv4pqfm5mf37dq.apps.googleusercontent.com'
    );
  }
  async verify(token: string) {
    console.log('GOOGLE_AUTH', token);
    const ticket = await this.googleClient.verifyIdToken({
      idToken: token,
      audience:
        '984868387038-7ni62h613e8df34am1tv4pqfm5mf37dq.apps.googleusercontent.com',
    });

    const payload = ticket.getPayload();

    return payload;
  }
}

const googleOAuth = new GoogleOAuth();

export { googleOAuth };
