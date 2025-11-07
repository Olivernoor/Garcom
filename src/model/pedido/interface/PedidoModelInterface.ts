import { Model } from "@sequelize/core";


interface PedidoModelInterface extends Model{
id: string;
  mesaId: string;
  status: 'aberto' | 'fechado' | 'cancelado';
  criadoEm: Date;
  atualizadoEm: Date;
};

export default PedidoModelInterface
