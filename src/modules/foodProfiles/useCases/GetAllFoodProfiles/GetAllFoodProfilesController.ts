import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllFoodProfilesUseCase } from './GetAllFoodProfilesUseCase';

class GetAllFoodProfileController {
  async handle(request: Request, response: Response) {
    const foodProfileUseCase = container.resolve(GetAllFoodProfilesUseCase);

    const foodProfiles = await foodProfileUseCase.execute();

    return response.json(foodProfiles);
  }
}

export { GetAllFoodProfileController };
