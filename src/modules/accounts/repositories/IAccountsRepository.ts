import { ICreateAccountDTO } from '../dtos/ICreateAccountDTO';

export type User = {
  id: string;
  email: string;
  name: string;
  birthday: Date;
  socialUserId: string;
  avatar: string | null;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type IncludeType = {
  UserAllergy?: boolean;
  UserFoodProfile?: boolean;
};

export interface IAccountsRepository {
  create(data: ICreateAccountDTO): Promise<User>;

  findByEmail(email: string): Promise<User | null>;

  findById(id: string, include?: IncludeType): Promise<User | null>;

  findBySocialId(id: string): Promise<User | null>;
}
