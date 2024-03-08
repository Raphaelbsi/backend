import { Cliente } from "../models/cliente";



export const ordenarClientesPorDistancia = (clientes: Cliente[]): Cliente[] => {
  const pontoInicial = { coordenada_x: 0, coordenada_y: 0 };

  return clientes.sort((a, b) => {
    const distA = calcularDistancia(pontoInicial, a);
    const distB = calcularDistancia(pontoInicial, b);
    return distA - distB;
  });
};

const calcularDistancia = (pontoA: { coordenada_x: number; coordenada_y: number }, pontoB: Cliente) => {
  return Math.sqrt(
    (pontoB.coordenada_x - pontoA.coordenada_x) ** 2 +
    (pontoB.coordenada_y - pontoA.coordenada_y) ** 2
  );
};
