import { Prisma } from '@prisma/client';
import { ICreateUserAllergiesDTO } from '../dtos/ICreateUserAllergiesDTO';

interface IAccountAllergiesRepository {
  createMany({ data }: ICreateUserAllergiesDTO): Promise<Prisma.BatchPayload>;
}

export { IAccountAllergiesRepository };
