import connection from "../../config/database";
import { DataTypes } from "@sequelize/core";
import PedidoModelInterface from "./interface/PedidoModelInterface";

const Pedido = connection.define<PedidoModelInterface>('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: DataTypes.ENUM('aberto', 'fechado', 'cancelado'),
    allowNull: false,
    defaultValue: 'aberto'
  },
  criadoEm: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  atualizadoEm: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'Pedidos',
  timestamps: false
});

export default Pedido;