import { ICreateUserFoodProfilesDTO } from '../../../dtos/ICreateUserFoodProfilesDTO';
import {
  IFoodProfilesRepository,
  FoodProfilesType,
} from '../../IFoofProfilesRepository';
import { prismaService } from '../../../../../shared/infra/db/prisma/prismaService';

class FoodProfileRepository implements IFoodProfilesRepository {
  createMany({ data }: ICreateUserFoodProfilesDTO): Promise<FoodProfilesType> {
    return prismaService.userFoodProfile.createMany({
      data,
      skipDuplicates: true,
    });
  }
}

export { FoodProfileRepository };
