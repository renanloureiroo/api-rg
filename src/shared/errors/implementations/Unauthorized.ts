import { AppError } from './AppError';

class Unauthorized extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

export { Unauthorized };
