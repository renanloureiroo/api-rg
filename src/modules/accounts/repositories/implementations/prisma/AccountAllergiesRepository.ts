import { Prisma } from '@prisma/client';
import { prismaService } from '../../../../../shared/infra/db/prisma/prismaService';

import { IAccountAllergiesRepository } from '../../IAccountAllergiesRepository';
import { ICreateUserAllergiesDTO } from '../../../dtos/ICreateUserAllergiesDTO';

class AccountAllergiesRepository implements IAccountAllergiesRepository {
  async createMany({
    data,
  }: ICreateUserAllergiesDTO): Promise<Prisma.BatchPayload> {
    return await prismaService.userAllergy.createMany({
      data,
      skipDuplicates: true,
    });
  }
}

export { AccountAllergiesRepository };
