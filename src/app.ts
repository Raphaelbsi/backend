import express, { Express } from 'express';
import clienteRoutes from './routes';

const app: Express = express();

app.use(express.json());
app.use(clienteRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


export default app;
