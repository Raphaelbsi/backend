import { Cliente, clienteModel } from '../models/cliente';

class ClientesService {
  async adicionarCliente(cliente: Cliente): Promise<Cliente> {

    return await clienteModel.adicionar(cliente);
  }

  async listarClientes(): Promise<Cliente[]> {
    return await clienteModel.listar();
  }
}

export const clientesService = new ClientesService();
