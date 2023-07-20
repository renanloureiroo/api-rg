import { Router } from 'express';

import { GetAllFoodProfileController } from '../../../../modules/foodProfiles/useCases/GetAllFoodProfiles/GetAllFoodProfilesController';

const foodProfilesRoutes = Router();

const getAllFoodProfilesController = new GetAllFoodProfileController();

foodProfilesRoutes.get('/', getAllFoodProfilesController.handle);

export { foodProfilesRoutes };
