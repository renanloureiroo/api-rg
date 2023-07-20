import { container } from 'tsyringe';

import { IAccountsRepository } from '../../modules/accounts/repositories/IAccountsRepository';
import { AccountsRepository } from '../../modules/accounts/repositories/implementations/prisma/AccountsRepository';

import { IAccountAllergiesRepository } from '../../modules/accounts/repositories/IAccountAllergiesRepository';
import { AccountAllergiesRepository } from '../../modules/accounts/repositories/implementations/prisma/AccountAllergiesRepository';

import { IAccountFoodProfilesRepository } from '../../modules/accounts/repositories/IAccountFoodProfilesRepository';
import { AccountFoodProfileRepository } from '../../modules/accounts/repositories/implementations/prisma/AccountFoodProfilesRepository';

import { IFoodProfilesRepository } from '../../modules/foodProfiles/repositories/IFoodProfilesRepository';
import { FoodProfileRepository } from '../../modules/foodProfiles/repositories/implementations/prisma/FoodProfileRepository';

import { IAllergiesRepository } from '../../modules/allergies/repositories/IAllergiesRepository';
import { AllergiesRepository } from '../../modules/allergies/repositories/implementations/prisma/AllergiesRepository';

container.registerSingleton<IAccountsRepository>(
  'AccountsRepository',
  AccountsRepository
);

container.registerSingleton<IAccountAllergiesRepository>(
  'AccountAllergiesRepository',
  AccountAllergiesRepository
);

container.registerSingleton<IAccountFoodProfilesRepository>(
  'AccountFoodProfilesRepository',
  AccountFoodProfileRepository
);

container.registerSingleton<IFoodProfilesRepository>(
  'FoodProfilesRepository',
  FoodProfileRepository
);

container.registerSingleton<IAllergiesRepository>(
  'AllergiesRepository',
  AllergiesRepository
);
