import { inject } from 'tsyringe';
import { IAccountsRepository } from '../../repositories';
import { NotFound } from '../../../../shared/errors/implementations';

interface IRequest {
  accountId: string;
}

class GetProfileUseCase {
  constructor(
    @inject('AccountsRepository')
    private readonly accountsRepository: IAccountsRepository
  ) {}

  async execute({ accountId }: IRequest) {
    try {
      const account = await this.accountsRepository.findById(accountId, {
        UserAllergy: true,
        UserFoodProfile: true,
      });

      if (!account) throw new NotFound('Account not found!');

      return account;
    } catch (error) {
      throw error;
    }
  }
}

export { GetProfileUseCase };
