import { Router } from 'express';
import { clientesController } from '../controllers/clientesController';

const router = Router();

router.post('/clientes', clientesController.adicionarCliente.bind(clientesController));
router.get('/clientes', clientesController.listarClientes.bind(clientesController));

export default router;
