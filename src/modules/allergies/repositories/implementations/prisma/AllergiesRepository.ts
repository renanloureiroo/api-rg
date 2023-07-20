import { IAllergiesRepository } from '../../IAllergiesRepository';
import { Allergy } from '../../../entities/Allergy';

import { prismaService } from '../../../../../shared/infra/db/prisma/prismaService';

class AllergiesRepository implements IAllergiesRepository {
  getAll(): Promise<Allergy[]> {
    return prismaService.allergy.findMany();
  }
}

export { AllergiesRepository };
