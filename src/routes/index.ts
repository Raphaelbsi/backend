import { Router } from 'express';
import { clientesController } from '../controllers/clientesController';

const router = Router();

router.post('/clientes', clientesController.adicionarCliente.bind(clientesController));
router.get('/clientes', clientesController.listarClientes.bind(clientesController));
router.get('/rota', clientesController.calcularRotaClientes);

export default router;
