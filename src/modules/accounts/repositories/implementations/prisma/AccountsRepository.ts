import { prismaService } from '../../../../../shared/infra/db/prisma/prismaService';
import { ICreateAccountDTO } from '../../../dtos/ICreateAccountDTO';
import {
  IAccountsRepository,
  IncludeType,
  User,
} from '../../IAccountsRepository';

class AccountsRepository implements IAccountsRepository {
  findBySocialId(id: string): Promise<User | null> {
    return prismaService.user.findFirst({
      where: {
        socialUserId: id,
      },
    });
  }
  findByEmail(email: string): Promise<User | null> {
    console.log('EMAIL', email);
    return prismaService.user.findFirst({
      where: {
        email,
      },
    });
  }
  findById(id: string, include?: IncludeType): Promise<User | null> {
    return prismaService.user.findUnique({
      where: {
        id,
      },
      include,
    });
  }

  async create(data: ICreateAccountDTO): Promise<User> {
    return prismaService.user.create({
      data: {
        socialUserId: data.socialUserId,
        socialType: data.socialType,
        name: data.name,
        email: data.email,
        avatar: data.avatar,
        birthday: data.birthday,
      },
    });
  }
}

export { AccountsRepository };
