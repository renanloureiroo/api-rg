import 'reflect-metadata';
import '../../container';
import express from 'express';
import 'express-async-errors';
import { handlerErrors } from './middlewares/handlerErrors';
import { appRoutes } from './routes/app.routes';
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.use(appRoutes);

app.use(handlerErrors);

export { app };
