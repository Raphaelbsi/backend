import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { Application } from 'express';

const swaggerDocument = YAML.load('./swagger.yaml');

export const setupSwagger = (app: Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
