import { FoodProfile } from '../entity/FoodProfile';

interface IFoodProfilesRepository {
  getAll(): Promise<FoodProfile[]>;
}

export { IFoodProfilesRepository };
