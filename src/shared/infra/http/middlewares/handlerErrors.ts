import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../errors/implementations/AppError';
import { ZodError } from 'zod';

function handlerErrors(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      error: error.message,
    });
    return next();
  }

  if (error instanceof ZodError) {
    return response.status(400).json({ message: error.flatten().fieldErrors });
  }

  response.status(500).json({
    status: 'error',
    message: `Internal Server Error - ${error.message}`,
  });

  return next();
}

export { handlerErrors };
