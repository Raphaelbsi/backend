import { Request, Response } from 'express';
import { clientesService } from '../services/clientesService';
import { ordenarClientesPorDistancia } from '../utils/calculadoraRota';

class ClientesController {
  async adicionarCliente(req: Request, res: Response): Promise<void> {
    try {
      const cliente = await clientesService.adicionarCliente(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send('Erro interno do servidor');
      }
    }
  }

  async listarClientes(req: Request, res: Response): Promise<void> {
    try {
      const clientes = await clientesService.listarClientes();
      res.status(200).json(clientes);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send('Erro interno do servidor');
      }
    }
  }

  async calcularRotaClientes(req: Request, res: Response): Promise<void> {
    try {
      const clientes = await clientesService.listarClientes();
      const clientesOrdenados = ordenarClientesPorDistancia(clientes);
      res.json(clientesOrdenados);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send('Erro interno do servidor');
      }
    }
  }

}

export const clientesController = new ClientesController();
