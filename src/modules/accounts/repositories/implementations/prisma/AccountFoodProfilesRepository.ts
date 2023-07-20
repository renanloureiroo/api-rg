import { ICreateUserFoodProfilesDTO } from '../../../dtos/ICreateUserFoodProfilesDTO';
import {
  IAccountFoodProfilesRepository,
  FoodProfilesType,
} from '../../IAccountFoodProfilesRepository';
import { prismaService } from '../../../../../shared/infra/db/prisma/prismaService';

class AccountFoodProfileRepository implements IAccountFoodProfilesRepository {
  createMany({ data }: ICreateUserFoodProfilesDTO): Promise<FoodProfilesType> {
    return prismaService.userFoodProfile.createMany({
      data,
      skipDuplicates: true,
    });
  }
}

export { AccountFoodProfileRepository };
