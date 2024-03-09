import express, { Express } from 'express';
import clienteRoutes from './routes';
import { setupSwagger } from '../swaggerConfig';
import cors from 'cors';

const app: Express = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(clienteRoutes);

const port = process.env.PORT || 3000;

setupSwagger(app);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


export default app;
