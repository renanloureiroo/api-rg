import { OAuth2Client } from 'google-auth-library';
import { IGoogleOAuth } from '../IGoogleOAuth';

class GoogleOAuth implements IGoogleOAuth {
  private readonly googleClient: OAuth2Client;

  constructor() {
    this.googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }
  async verify(token: string) {
    const ticket = await this.googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    return payload;
  }
}

const googleOAuth = new GoogleOAuth();

export { googleOAuth };
