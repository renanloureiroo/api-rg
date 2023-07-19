import { User } from '../../modules/accounts/repositories/IAccountsRepository';

type UserData = User & {
  userAllergies: [];
  userFoodProfiles: [];
};

export interface AccountMapper {
  id: string;
  email: string;
  name: string;
  birthday: Date;
  avatar: string | null;
  userAllergies: [];
  userFoodProfiles: [];
}

export function accountMapper({
  id,
  name,
  email,
  birthday,
  avatar,
  userAllergies,
  userFoodProfiles,
}: UserData): AccountMapper {
  return {
    id,
    name,
    email,
    birthday,
    avatar,
    userAllergies,
    userFoodProfiles,
  };
}
