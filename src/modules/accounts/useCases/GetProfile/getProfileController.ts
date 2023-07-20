import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetProfileUseCase } from './getProfileUseCase';

class GetProfileController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;

    const getProfileUseCase = container.resolve(GetProfileUseCase);

    const profile = await getProfileUseCase.execute({
      accountId: id,
    });

    return response.json(profile);
  }
}

export { GetProfileController };
