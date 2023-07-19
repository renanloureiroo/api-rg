import { TokenPayload } from 'google-auth-library';

interface IGoogleOAuth {
  verify(token: string): Promise<TokenPayload | undefined>;
}

export { IGoogleOAuth };
