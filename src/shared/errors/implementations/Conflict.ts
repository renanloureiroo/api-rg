import { AppError } from './AppError';

class Conflict extends AppError {
  constructor(message = 'Conflict') {
    super(message, 409);
  }
}

export { Conflict };
