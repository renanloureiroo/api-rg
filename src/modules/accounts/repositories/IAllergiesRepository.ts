import { Prisma } from '@prisma/client';
import { ICreateUserAllergiesDTO } from '../dtos/ICreateUserAllergiesDTO';

export interface IAllergiesRepository {
  createMany({ data }: ICreateUserAllergiesDTO): Promise<Prisma.BatchPayload>;
}
