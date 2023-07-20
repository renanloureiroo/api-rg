import { container } from 'tsyringe';
import { GetAllAllergiesUseCase } from './GetAllAllergiesUseCase';
import { Request, Response } from 'express';

class GetAllAllergiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllAllergiesUseCase = container.resolve(GetAllAllergiesUseCase);
    const allergies = await getAllAllergiesUseCase.execute();
    return response.json(allergies);
  }
}

export { GetAllAllergiesController };
