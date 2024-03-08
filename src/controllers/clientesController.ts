import { Request, Response } from 'express';
import { clientesService } from '../services/clientesService';

class ClientesController {
  async adicionarCliente(req: Request, res: Response): Promise<void> {
    try {
      const cliente = await clientesService.adicionarCliente(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async listarClientes(req: Request, res: Response): Promise<void> {
    try {
      const clientes = await clientesService.listarClientes();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export const clientesController = new ClientesController();
