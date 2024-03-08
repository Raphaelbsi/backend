import { Cliente, clienteModel } from '../models/cliente';

interface ValidationResult {
  isValid: boolean;
  message?: string;
}

class ClientesService {
  private async validarCliente(cliente: Cliente): Promise<ValidationResult> {
    const { nome, email, telefone, coordenada_x, coordenada_y } = cliente;
    const newEmail = await clienteModel.emailExiste(email)
    if (!nome || !email || !telefone) {
      return { isValid: false, message: 'Nome, email e telefone são obrigatórios' };
    }
    if (coordenada_x === undefined || coordenada_y === undefined) {
      return { isValid: false, message: 'Coordenadas X e Y são obrigatórias' };
    }
    if (typeof coordenada_x !== 'number' || typeof coordenada_y !== 'number') {
      return { isValid: false, message: 'Coordenadas X e Y devem ser números' };
    }
    if (newEmail) {
      return { isValid: false, message: 'Email já cadastrado.' }
    }
    return { isValid: true };
  }

  async adicionarCliente(cliente: Cliente): Promise<Cliente | string> {
    const validation = this.validarCliente(cliente);
    if (!(await validation).isValid) {
      throw new Error((await validation).message);
    }
    return await clienteModel.adicionar(cliente);
  }

  async listarClientes(): Promise<Cliente[]> {
    return await clienteModel.listar();
  }

}

export const clientesService = new ClientesService();
