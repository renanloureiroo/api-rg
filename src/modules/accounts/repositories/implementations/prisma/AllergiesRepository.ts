import { Prisma } from '@prisma/client';
import { prismaService } from '../../../../../shared/infra/db/prisma/prismaService';

import { IAllergiesRepository } from '../../IAllergiesRepository';
import { ICreateUserAllergiesDTO } from '../../../dtos/ICreateUserAllergiesDTO';

class AllergiesRepository implements IAllergiesRepository {
  async createMany({
    data,
  }: ICreateUserAllergiesDTO): Promise<Prisma.BatchPayload> {
    return await prismaService.userAllergy.createMany({
      data,
      skipDuplicates: true,
    });
  }
}

export { AllergiesRepository };
