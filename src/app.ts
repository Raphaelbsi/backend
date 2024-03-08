import express, { Express } from 'express';
import clienteRoutes from './routes';

const app: Express = express();

app.use(express.json());
app.use(clienteRoutes);

export default app;
