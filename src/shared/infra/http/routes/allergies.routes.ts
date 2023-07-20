import { Router } from 'express';
import { GetAllAllergiesController } from '../../../../modules/allergies/useCases/GetAllAllergies/GetAllAllergiesController';

const allergiesRoutes = Router();

const getAllAllergiesController = new GetAllAllergiesController();

allergiesRoutes.get('/', getAllAllergiesController.handle);

export { allergiesRoutes };
