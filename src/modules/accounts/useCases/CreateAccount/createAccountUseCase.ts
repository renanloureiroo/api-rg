import { inject, injectable } from 'tsyringe';
import { ICreateAccountDTO } from '../../dtos';

import {
  BadRequest,
  Conflict,
} from '../../../../shared/errors/implementations';
import {
  IAccountAllergiesRepository,
  IAccountFoodProfilesRepository,
  IAccountsRepository,
} from '../../repositories';

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private readonly accountsRepository: IAccountsRepository,
    @inject('AccountAllergiesRepository')
    private readonly accountAllergiesRepository: IAccountAllergiesRepository,
    @inject('AccountFoodProfilesRepository')
    private readonly accountFoodProfilesRepository: IAccountFoodProfilesRepository
  ) {}
  async execute(data: ICreateAccountDTO): Promise<void> {
    try {
      const accountAlreadyExists = await this.accountsRepository.findByEmail(
        data.email
      );

      const accountAlreadyExistsWithSameSocialProvider =
        accountAlreadyExists &&
        data.socialUserId === accountAlreadyExists.socialUserId;

      if (accountAlreadyExistsWithSameSocialProvider) return;

      if (accountAlreadyExists) {
        throw new Conflict('E-mail already used!');
      }

      const account = await this.accountsRepository.create(data);

      if (data.userAllergies) {
        await this.accountAllergiesRepository.createMany({
          data: data.userAllergies.map((allergyId) => ({
            userId: account.id,
            allergyId,
          })),
        });
      }

      if (data.userFoodProfiles) {
        await this.accountFoodProfilesRepository.createMany({
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
