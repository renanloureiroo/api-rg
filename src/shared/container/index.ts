import { container } from 'tsyringe';

import { AccountsRepository } from '../../modules/accounts/repositories/implementations/prisma/AccountsRepository';
import { IAccountsRepository } from '../../modules/accounts/repositories/IAccountsRepository';

import { IAllergiesRepository } from '../../modules/accounts/repositories/IAllergiesRepository';
import { AllergiesRepository } from '../../modules/accounts/repositories/implementations/prisma/AllergiesRepository';

import { IFoodProfilesRepository } from '../../modules/accounts/repositories/IFoofProfilesRepository';
import { FoodProfileRepository } from '../../modules/accounts/repositories/implementations/prisma/FoodProfilesRepository';

container.registerSingleton<IAccountsRepository>(
  'AccountsRepository',
  AccountsRepository
);

container.registerSingleton<IAllergiesRepository>(
  'AllergiesRepository',
  AllergiesRepository
);

container.registerSingleton<IFoodProfilesRepository>(
  'FoodProfilesRepository',
  FoodProfileRepository
);
