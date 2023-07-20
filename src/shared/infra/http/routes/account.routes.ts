import { Router } from 'express';
import { CreateAccountController } from '../../../../modules/accounts/useCases/CreateAccount/createAccountController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { GetProfileController } from '../../../../modules/accounts/useCases/GetProfile/getProfileController';

const accountRoutes = Router();

const createAccountController = new CreateAccountController();
const getProfileController = new GetProfileController();

accountRoutes.get('/', ensureAuthenticated, getProfileController.handle);
accountRoutes.post('/', createAccountController.handle);

export { accountRoutes };
