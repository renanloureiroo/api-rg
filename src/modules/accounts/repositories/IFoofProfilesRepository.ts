import { Prisma } from '@prisma/client';
import { ICreateUserFoodProfilesDTO } from '../dtos/ICreateUserFoodProfilesDTO';

export type FoodProfilesType = Prisma.BatchPayload;

interface IFoodProfilesRepository {
  createMany({ data }: ICreateUserFoodProfilesDTO): Promise<FoodProfilesType>;
}

export { IFoodProfilesRepository };
