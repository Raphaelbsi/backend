import pool from '../config/dbConfig';

export interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  coordenada_x: number;
  coordenada_y: number;
}

class ClienteModel {
  async adicionar(cliente: Cliente): Promise<Cliente> {
    const { nome, email, telefone, coordenada_x, coordenada_y } = cliente;
    const { rows } = await pool.query(
      'INSERT INTO clientes(nome, email, telefone, coordenada_x, coordenada_y) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [nome, email, telefone, coordenada_x, coordenada_y]
    );
    return rows[0];
  }

  async listar(): Promise<Cliente[]> {
    const { rows } = await pool.query('SELECT * FROM clientes');
    return rows;
  }

  async emailExiste(email: string): Promise<boolean> {
    const query = 'SELECT COUNT(*) FROM clientes WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    const count = parseInt(rows[0].count);
    if (count > 0) {
      return true;
    } else {
      return false;
    }

  }
}

export const clienteModel = new ClienteModel();
