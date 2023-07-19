import { inject, injectable } from 'tsyringe';
import { ICreateAccountDTO } from '../../dtos';

import {
  BadRequest,
  Conflict,
} from '../../../../shared/errors/implementations';
import {
  IAllergiesRepository,
  IFoodProfilesRepository,
  IAccountsRepository,
} from '../../repositories';

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private readonly accountsRepository: IAccountsRepository,
    @inject('AllergiesRepository')
    private readonly allergiesRepository: IAllergiesRepository,
    @inject('FoodProfilesRepository')
    private readonly foodProfilesRepository: IFoodProfilesRepository
  ) {}
  async execute(data: ICreateAccountDTO): Promise<void> {
    try {
      const accountAlreadyExists = await this.accountsRepository.findByEmail(
        data.email
      );

      if (accountAlreadyExists) {
        throw new Conflict('E-mail already used!');
      }

      const account = await this.accountsRepository.create(data);

      if (data.userAllergies) {
        await this.allergiesRepository.createMany({
          data: data.userAllergies.map((allergyId) => ({
            userId: account.id,
            allergyId,
          })),
        });
      }

      if (data.userFoodProfiles) {
        await this.foodProfilesRepository.createMany({
          data: data.userFoodProfiles.map((foodProfileId) => ({
            userId: account.id,
            foodProfileId,
          })),
        });
      }

      return;
    } catch (error) {
      throw error;
    }
  }
}

export { CreateAccountUseCase };
