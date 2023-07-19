import { Request, Response } from 'express';
import { CreateAccountUseCase } from './createAccountUseCase';
import { z } from 'zod';
import { container } from 'tsyringe';

const UserSchema = z.object({
  socialUserId: z.string(),
  socialType: z.enum(['FACEBOOK', 'GOOGLE']).default('GOOGLE'),
  email: z.string().email(),
  name: z.string(),
  birthday: z.string(),
  avatar: z.string().optional(),
  userAllergies: z.array(z.string()).min(1),
  userFoodProfiles: z.array(z.string()).min(1),
});

class CreateAccountController {
  async handle(request: Request, response: Response) {
    try {
      const data = UserSchema.parse(request.body);
      const createAccountUseCase = container.resolve(CreateAccountUseCase);
      const account = await createAccountUseCase.execute({
        ...data,
        birthday: new Date(data.birthday),
      });

      return response.status(201).json(account);
    } catch (error) {
      throw error;
    }
  }
}

export { CreateAccountController };
