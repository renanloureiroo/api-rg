import { FoodProfile } from '../../../entity/FoodProfile';
import { IFoodProfilesRepository } from '../../IFoodProfilesRepository';
import { prismaService } from '../../../../../shared/infra/db/prisma/prismaService';

class FoodProfileRepository implements IFoodProfilesRepository {
  getAll(): Promise<FoodProfile[]> {
    return prismaService.foodProfile.findMany();
  }
}

export { FoodProfileRepository };
