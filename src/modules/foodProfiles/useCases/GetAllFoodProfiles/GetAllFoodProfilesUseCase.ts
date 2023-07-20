import { inject, injectable } from 'tsyringe';
import { IFoodProfilesRepository } from '../../repositories/IFoodProfilesRepository';
import { FoodProfile } from '../../entity/FoodProfile';

@injectable()
class GetAllFoodProfilesUseCase {
  constructor(
    @inject('FoodProfilesRepository')
    private readonly foodProfilesRepository: IFoodProfilesRepository
  ) {}

  execute(): Promise<FoodProfile[]> {
    return this.foodProfilesRepository.getAll();
  }
}

export { GetAllFoodProfilesUseCase };
