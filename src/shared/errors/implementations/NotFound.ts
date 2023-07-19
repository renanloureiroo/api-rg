import { AppError } from './AppError';

class NotFound extends AppError {
  constructor(message = 'Not Found') {
    super(message, 404);
  }
}

export { NotFound };
