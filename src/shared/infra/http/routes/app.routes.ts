import { Router } from 'express';
import { accountRoutes } from './account.routes';

const appRoutes = Router();

appRoutes.use('/accounts', accountRoutes);

export { appRoutes };
