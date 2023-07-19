import { AppError } from './AppError';

class BadRequest extends AppError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

export { BadRequest };
