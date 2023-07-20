import { Router } from 'express';
import { accountRoutes } from './account.routes';
import { foodProfilesRoutes } from './foodProfiles.routes';
import { allergiesRoutes } from './allergies.routes';

const appRoutes = Router();

appRoutes.use('/accounts', accountRoutes);
appRoutes.use('/food-profiles', foodProfilesRoutes);
appRoutes.use('/allergies', allergiesRoutes);

export { appRoutes };
